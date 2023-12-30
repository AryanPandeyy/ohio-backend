const User = require('../models/userSchema');
const APPError = require('../utils/appError');
const sendJsonRes = require('../utils/sendJsonRes');

const getAllUsers = async (req, res, next) => {
  try {
    let query = User.find();
    if (req.user && req.user.role === 'secretary') {
      query = query.find({ secretaryEmail: req.user.primaryEmail });
    }
    const users = await query;
    sendJsonRes(res, 200, users);
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};

const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  console.log(userId);

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true
    });
    sendJsonRes(res, 200, updatedUser);
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};
const deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const updatedUser = await User.findByIdAndDelete(userId);
    sendJsonRes(res, 204, null);
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};
const getDocs = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'documents'
      })
      .select('primaryEmail');
    sendJsonRes(res, 200, user);
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};

module.exports = { getAllUsers, updateUser, deleteUser, getDocs };
