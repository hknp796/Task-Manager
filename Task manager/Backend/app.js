const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const connectDb = require("./db/connect");
const cors = require("cors");
const router = require("./routes/crud");
require("dotenv").config();
const start = async () => {
  try {
    await connectDb(process.env.MONGO_CONNECT);
    app.listen(port, (req, res) => {
      console.log("You are listening to port :", port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
//middleware
app.use(express.json());
app.use(cors());

//require dotenv

// req router

app.use("/api/v1/crud", router);
//connection

app.use(express.static(path.join(__dirname, "./build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build"));
});
