const Multer = require('multer');
const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
  limits: {
    // file size is in bytes
    fileSize: 500000
  }
});
module.exports = upload;
