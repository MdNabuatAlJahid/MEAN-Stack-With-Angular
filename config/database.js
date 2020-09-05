const crypto = require("crypto").randomBytes.toString("hex");

module.exports = {
  uri: "mongodb://localhost:27017/",
  secret: crypto,
  db: "mean-angular",
};
