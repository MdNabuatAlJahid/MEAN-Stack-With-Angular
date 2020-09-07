const User = require("../models/user");

module.exports = function (router) {
  router.post("/register", (req, res) => {
    res.send("Hello world");
  });
  return router;
};
