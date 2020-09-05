const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const config = require("./config/database");

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("Could not connect to database: ", err);
  } else {
    console.log("Connected to database: " + config.db);
  }
});

app.get("*", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
