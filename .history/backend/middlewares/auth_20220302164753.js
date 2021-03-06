const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please login first",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id);
  next();
};
