const cloudinary = require('cloudinary').v2;
const { unlinkSync } = require('fs');
const path = require('path');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnclould = async (fileName, userphoto) => {
  if (!fileName) return null;
  let url = null;
  try {
    const res = await cloudinary.uploader.upload(fileName, {
      resource_type: 'auto'
    });

    //resize the image if it is avatar image
    if (userphoto) {
      url = await cloudinary.url(res.public_id, {
        width: 500,
        height: 500,
        crop: 'crop'
      });
      unlinkSync(fileName);
      return url;
    }
    unlinkSync(fileName);
    return res.url;
  } catch (err) {
    unlinkSync(fileName);
    return null;
  }
};

module.exports = { uploadOnclould };
