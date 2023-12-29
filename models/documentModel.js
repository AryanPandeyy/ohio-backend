const mongoose = require('mongoose');

const docModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  fileType: {
    type: String
  },
  url: {
    type: String,
    required: true
  }
});

const Document = mongoose.model('Document', docModel);
module.exports = Document;
