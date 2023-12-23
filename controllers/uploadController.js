const upload = require('../utils/multer');
const { uploadOnclould } = require('../utils/cloudinary');
const path = require('path');
const APPError = require('../utils/appError');

const uploadFiles = upload.single('upload_file');
const uploadToClould = async (req, res, next) => {
  try {
    const postUrl = await uploadOnclould(path.join(__dirname, '..', 'public', 'temp', req.filename), false);
    if (!postUrl) return next(new APPError('Please provide file name', 404));
    res.status(200).json({
      url: postUrl
    });
  } catch (err) {
    return next(new APPError(err.message, 400));
  }
};

module.exports = { uploadFiles, uploadToClould };
