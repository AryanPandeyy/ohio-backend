const connectDB = require('./config/db');
const routes = require('./routes/routes');
const User = require('./models/userSchema');
const Secretary = require('./models/secretarySchema');
const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const sendJsonRes = require('./utils/sendJsonRes');
const APPError = require('./utils/appError');

const app = express();
const corsOption = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOption));

app.use(express.json());
//app.use("/api", routes);
connectDB();

const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user/signup', async (req, res) => {
  const userData = { ...req.body };
  const userExist = await User.create({
    memberShipObj: {},
  });
});

app.post('/secretary/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const secretaryExist = await Secretary.findOne({
    username,
  });
  if (secretaryExist) {
    res
      .status(400)
      .json({ message: 'Secretary already exists on this username' });
  } else {
    const secretary = await Secretary.create({
      email,
      username,
      password,
    });
    res.status(201).json({ message: 'Secretary created' });
  }
});

// app.post('/secretary/signup', async (req, res, next) => {
//   try {
//     const { username, email, password } = req.body;
//     const secretaryExist = await Secretary.findOne({
//       username,
//     });
//     if (secretaryExist) {
//       res
//         .status(400)
//         .json({ message: 'Secretary already exists on this username' });
//     } else {
//       const secretary = await Secretary.create({
//         email,
//         username,
//         password,
//       });
//       sendJsonRes(res, 201, secretary);
//     }
//   } catch (err) {
//     next(new APPError(err.message, 400));
//   }
// });

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
