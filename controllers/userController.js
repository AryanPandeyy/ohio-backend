const User = require('../models/userSchema');
const APPError = require('../utils/appError');
const sendJsonRes = require('../utils/sendJsonRes');

const getAllUsers = async (req, res, next) => {
  try {
    let query = User.find();
    if (req.user.role === 'secretary') {
      query = query.find({ secretaryEmail: req.user.primaryEmail });
    }
    const users = await query;
    sendJsonRes(res, 200, users);
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};

module.exports = { getAllUsers };
