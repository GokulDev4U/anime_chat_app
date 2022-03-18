const user = require("../models/user");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error_msg", "You are not logged in");
  res.redirect("/users/login");
};
