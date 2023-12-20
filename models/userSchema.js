const mongoose = require('mongoose');
const memberShipObj = require('./memberShip');
const documentObj = require('./document');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema(
  {
    name: {
      firstName: {
        required: true,
        type: String,
      },
      middleName: {
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
    sex: {
      required: true,
      type: String,
    },
    adult: {
      required: true,
      type: String,
    },
    photo: {
      type: String,
    },
    seal: {
      type: String,
    },
    placeOfInhabitance: {
      required: true,

      type: String,
    },

    address: {
      mailingAddress: {
        required: true,
        type: String,
      },
      mailingAddress2: {
        type: String,
      },
      mailingCity: {
        required: true,
        type: String,
      },
      county: {
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
      type: String,
    },
    memberShip: {
      required: true,
      type: [String],
    },
    documentObj,
    isApproved: {
      type: Boolean,
      default: false,
    },
    secretary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Secretary',
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin', 'super admin', 'recording secretary'],
        message:
          'role should be either user or admin or super admin or recording secretary',
      },
      default: 'user',
    },

    //for recording secretary part(will update by rec-sec)
    recordingNumber: String,
    masterRecord: String,
    credentialCardPrintDate: Date,
    masterCredentialCardNumber: String,
    verified: {
      type: Boolean,
      default: false,
    },
    paidCredentialCard: {
      type: Boolean,
      default: false,
    },
    deceasedDate: Date,
  },
  //automatically added createdAt and updatedAt filed to Schema
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
