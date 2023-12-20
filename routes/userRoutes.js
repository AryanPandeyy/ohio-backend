const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from user router',
  });
});

// router.post('/signup', signup);
// router.post('/login', login);
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
