const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const userRouter = require('./routes/userRoutes');
const uploadRouter = require('./routes/fileRoutes');

const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

const corsOption = {
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
};
app.use(morgan('dev'))

app.use(cookieParser())

app.use(cors(corsOption));
app.use(express.json());
connectDB();

const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/upload', uploadRouter);

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
