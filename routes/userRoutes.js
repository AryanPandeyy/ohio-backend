const express = require('express');
const User = require('../models/userSchema');
const otpGenerator = require('otp-generator');
const { signup, login, uploadFile, protect, verifyEmail } = require('../controllers/authControllers');
const { sendOTPMail } = require('../utils/sendMail');
const { getAllUsers, updateUser, deleteUser, getDocs } = require('../controllers/userController');
const APPError = require('../utils/appError');

const router = express.Router();

// Route to approve a user by a secretary
router.post('/approve-user', protect, async (req, res, next) => {
  //here user is either secretary or admin
  const user = req.user;

  try {
    // Check if the user has the role of 'secretary'
    if (req.user.role !== 'secretary') {
      return next(new APPError('Only secretary can perform this function'));
    }
    const otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false
    });
    const mailResponse = await sendOTPMail(
      user.primaryEmail,
      'Verification Email',
      `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`
    );
    console.log('Email sent successfully: ', mailResponse);
    // Save the OTP and its expiration time in the secretary document
    const otpExpiration = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiration
    try {
      console.log('ID ', user._id);
      const debug = await User.findByIdAndUpdate(req.user.id, { otp, otpExpiration }, { new: true });
      console.log('DEBUG AFTER OTP', debug);
    } catch (err) {
      console.log('ERROR SETTING USER ', err);
    }
    res.status(200).json({ status: true, message: 'OTP sent to secretary for confirmation' });
  } catch (error) {
    console.error('Error approving user:', error);
    next(new APPError(error.message, 500));
  }
});

// Route for confirming OTP entered by secretary
router.post('/confirm-otp/:userId', protect, async (req, res) => {
  try {
    const { userId } = req.params;
    const user = req.user;
    const { enteredOTP } = req.body;
    console.log('USER', user);
    // Retrieve the secretary's OTP and its expiration time
    const storedOTP = user.otp;
    const otpExpiration = user.otpExpiration;

    // Check if the entered OTP matches the stored OTP and is not expired
    if (enteredOTP === storedOTP && new Date() < new Date(otpExpiration)) {
      // remove the otp from secretary fields
      const secretary = await User.findByIdAndUpdate(user._id, { otp: '', otpExpiration: '' });
      // If the OTP is valid, update the user's status to 'approved' in the database
      const updatedUser = await User.findByIdAndUpdate(userId, { isApproved: true });

      res.status(200).json({ status: true, message: 'User approved successfully' });
    } else {
      res.status(400).json({ status: false, message: 'Invalid OTP or OTP expired' });
    }
  } catch (error) {
    console.error('Error confirming OTP:', error);
    res.status(500).json({ status: false, message: 'Internal Server Error' });
  }
});

router.post('/signup', signup);
router.post('/login', login);
router.post('/verifyEmail', verifyEmail);
// router.get('/logout', logOut);
// router.post('/forgotPassword', forgotPassword);
// router.patch('/resetPassword/:token', resetPassword);

// //position of middleware matters
// router.use(protect);
// //secure all the routes by authentication after this middleware

// router.patch('/updatePassword', updatePassword);
// router.get('/me', getMe, getSpecificUser);
// router.get('/me/myReviews', getMyReviews);

// router.patch(
//   '/updateMe',
//   uploadUsersPhoto,
//   resizeUserPhoto,
//   uploadUserImg,
//   updateMe
// );
// router.get('/myTours', getBookedTours);
// router.delete('/deleteMe', deleteMe);
router.use(protect);
router.get('/getDocs', getDocs);

router.route('/').get(getAllUsers);
router.route('/:userId').patch(updateUser).delete(deleteUser);
module.exports = router;
