const express = require('express')
const {uploadFiles, uploadToClould} = require('../controllers/uploadController')

const router = express.Router();

router.post('/', uploadFiles, uploadToClould);

module.exports = router;
