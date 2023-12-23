const express = require('express');
const User = require('../models/userSchema');
const otpGenerator = require('otp-generator');
const { signup, login, uploadFile, protect } = require('../controllers/authControllers');
const { sendOTPMail } = require('../utils/sendMail');

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from user router'
  });
});

// Route to approve a user by a secretary
router.post('/approve-user/:userId', protect, async (req, res) => {
  // userId is of user that is need to be approved
  const { userId } = req.params;

  //here user is either secretary or admin
  const user = req.user;

  try {
    // Check if the user has the role of 'secretary'
    if (req.user.role !== 'secretary') {
      return res.status(403).json({ message: 'Only secretaries can approve users' });
    }
    const otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false
    });
    const mailResponse = await sendOTPMail(
      user.email.primaryEmail,
      'Verification Email',
      `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`
    );
    console.log('Email sent successfully: ', mailResponse);
    // Save the OTP and its expiration time in the secretary document
    const otpExpiration = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes expiration
    try {
      console.log('ID ', user._id);
      const debug = await User.updateOne(
        { 'email.primaryEmail': user.email.primaryEmail },
        { $set: { otp, otpExpiration } },
        { upsert: true }
      );
      console.log('DEBUG AFTER OTP', debug);
    } catch (err) {
      console.log('ERROR SETTING USER ', err);
    }
    res.json({ message: 'OTP sent to secretary for confirmation' });
  } catch (error) {
    console.error('Error approving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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
      const secretary = await User.findByIdAndUpdate(user._id, { $unset: { otp: '', otpExpiration: '' } });
      // If the OTP is valid, update the user's status to 'approved' in the database
      const updatedUser = await User.findByIdAndUpdate(userId, { isApproved: true });

      res.json({ message: 'User approved successfully', user: updatedUser });
    } else {
      res.status(400).json({ message: 'Invalid OTP or OTP expired' });
    }
  } catch (error) {
    console.error('Error confirming OTP:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/signup', signup);
router.post('/login', login);
router.post('/upload/file', uploadFile);
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

// //rest format routes
// router.use(restrictTo('admin'));

// router.route('/').get(getAllUsers).post(createUser);
// router.route('/:id').get(getSpecificUser).patch(updateUser).delete(deleteUser);
module.exports = router;
