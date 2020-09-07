const express = require("express");
const app = express();
const router = express.Router();
const port = 8080;
const mongoose = require("mongoose"); //Mongoose Config
const config = require("./config/database"); //Mongoose Config
const path = require("path"); //NodeJS Package for file paths
const authentication = require("./routes/authentication")(router);
const bodyParser = require("body-parser");

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

//Provide static directory for frontend (middleware)
// parse application
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + "/blog/dist"));
app.use("/authentication", authentication);

//Connect server to Anguler Index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/blog/dist/blog/index.html"));
});

//Start Server: Listening on port
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
