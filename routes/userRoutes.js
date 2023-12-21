const express = require('express');
const { signup, login, uploadFile } = require('../controllers/authControllers');

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from user router'
  });
});

// Route to approve a user by a secretary
router.post('/approve-user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Check if the user has the role of 'secretary'
    if (req.user.role !== 'secretary') {
      return res.status(403).json({ message: 'Only secretaries can approve users' });
    }

    // Update the user's status to 'approved' in the database
    const updatedUser = await User.findByIdAndUpdate(userId, { status: 'approved' }, { new: true });

    res.json({ message: 'User approved successfully', user: updatedUser });
  } catch (error) {
    console.error('Error approving user:', error);
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
