const mongoose = require("mongoose");
const memberShipObj = require("./memberShip");
const documentObj = require("./document");
const bcrypt = require('bcrypt');
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
  born: {
    required: true,
    type: Date,
  },
  adult: {
    required: true,
    type: String,
  },
  photo: {
    required: true,
    type: String,
  },
  seal: {
    required: true,
    type: String,
  },
  address: {
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
  // https://stackoverflow.com/a/66383722
  phone: {
    required: true,
    type: Number,
  },
  email: {
    primaryEmail: {
      required: true,
      type: String,
    },
    secondaryEmail: {
      required: true,
      type: String,
    },
  },
  password: {
    required: true,
    type: String,
  },
  secretaryEmail: {
    required: true,
    type: String,
  },
  coordinatorEmail: {
    required: true,
    type: String,
  },
  memberShipObj,
  documentObj,
  isApproved: {
    type: Boolean,
    default: false,
  },
  secretary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Secretary",
  },
});

userSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password, 12);
  next();

})


const User = mongoose.model("User", userSchema);
module.exports = User;
