const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const config = require("./config/database");
const mongoose = require("mongoose");

//database connection
mongoose.Promise = global.Promise;
mongoose.connect(
  config.uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Could not connect to database: ", err);
    } else {
      console.log("Connected to database: " + config.db);
    }
  }
);

app.use(express.static(__dirname + "/blog/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/blog/dist/blog/index.html"));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
