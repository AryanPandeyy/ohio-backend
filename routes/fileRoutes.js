const express = require('express');
const {uploadFiles, uploadPhotos, uploadToClould, uploadPhotoToClould} = require('../controllers/uploadController')
const upload = require('../utils/multer')

const router = express.Router();

router.post('/:userId', uploadFiles, uploadToClould);
router.post('/', upload.single('uploadPhoto'), uploadPhotoToClould);

module.exports = router;
