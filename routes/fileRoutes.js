const cloudinary = require('../utils/uploadFile');
const User = require('../models/userSchema');
const protect = require('../controllers/authControllers');

app.post('/upload/:id/profile', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
    const { user } = req.user;
    const imageUrl = cldRes.secure_url;
    await User.findByIdAndUpdate(user._id, { $set: { profile: { imageUrl } } });
  } catch (err) {
    console.log('ERROR: ', err);
  }
});

app.post('/upload/:id/physcialBorders', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});

app.post('/upload/:id/territoryMilitary', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/federalPersons', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/naturalizedGreenCard', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/undocumentedImmigrants', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/politicalStatus', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/birthRecord', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/witnessTestimony', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/voterCancellation', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/noitceDistraintLevy', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/revocationElectionPayTaxes', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/noticeDistraintLevy', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/letterStatusSOSUS', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/militarySeverance', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/deedReconveyance', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/certificateAssumedNames', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/actExpatriation', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/cancellationPowerAttorney', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/extendedCancellationPowerAttorney', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/foreginSoveregin', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/dnaParamontClaim', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/commonCarryDeclaration', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/diagramFraud', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/feeSchedule', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/lineageTreaty', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/marriageRecord', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/babyDeed', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/deathRecord', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/privateBusinessDocuments', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/otherDocumnets', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/noticesUpload', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/landPatent', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/territorialGovernment', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/municipalGovernment', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/commercialEntites', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
app.post('/upload/:id/commonLawWill', uploader.single('profile'), protect, async (req, res) => {
  try {
    const cldRes = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image'
    });
  } catch (err) {}
});
