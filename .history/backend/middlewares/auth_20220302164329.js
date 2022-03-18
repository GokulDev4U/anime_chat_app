const user = require("../models/user");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please login first",
    });
  }
};
