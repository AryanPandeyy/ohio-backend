import connectDB from "./config/db.js";
import routes from "./routes/routes.js";
import user from "./models/userSchema";
import express from "express";
import cors from "cors";

const app = express();
const corsOption = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOption));

app.use(express.json());
app.use("/api", routes);
connectDB();

const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/user/signup", (req, res) => {
  const { username, password } = req.body;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
