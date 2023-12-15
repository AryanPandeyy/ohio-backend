import connectDB from "./config/db.js";

import express from "express";
const app = express();
import routes from "./routes/routes.js";

app.use(express.json());
app.use("/api", routes);
connectDB();

const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
