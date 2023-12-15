const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    firstName: {
      required: true,
      type: String,
    },
    middleName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
  },
  Born: {
    required: true,
    type: Date,
  },
  Adult: {
    required: true,
    type: String,
  },
  Photo: {
    required: true,
    type: String,
  },
  Seal: {
    required: true,
    type: String,
  },
  Address: {
    mailingAddress: {
      required: true,
      type: String,
    },
    mailingCity: {
      required: true,
      type: String,
    },
    country: {
      required: true,
      type: String,
    },
    mailingState: {
      required: true,
      type: String,
    },
    mailingPostalCode: {
      required: true,
      type: String,
    },
  },
});

module.exports = userSchema;
