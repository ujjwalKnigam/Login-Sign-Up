import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
const __dirname = dirname(fileURLToPath(import.meta.url));
// const cors = require("cors")
import cors from "cors";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/detailDB", {
  useNewUrlParser: true,
});

const detailSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  email: String,
  password: String,
});

const detail = mongoose.model("Detail", detailSchema);

app.get("/login", (req, res) => {
  const email = req.query.email;
  detail.find({ email: email }).then((foundDetails) => {
    if (foundDetails.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

app.post("/submit", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const dob = req.body.DOB;
  const email = req.body.email;
  const password = req.body.password;
  detail.find({ email: email }).then((foundDetails) => {
    if (foundDetails.length > 0) {
      res.send('<script>alert("Account Already exists")</script>');
    } else {
      const detailInfo = new detail({
        name: name,
        dob: dob,
        email: email,
        password: password,
      });
      detailInfo.save();
    }
  });
});

app.listen(port, () => {
  console.log("Server started at port" + port);
});
