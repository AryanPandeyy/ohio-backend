const connectDB = require('./config/db');

const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./middlewares/globalErrorHandler');

const userRouter = require('./routes/userRoutes');

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

app.use('/api/v1/users', userRouter);

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
