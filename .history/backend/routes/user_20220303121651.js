const express = require("express");
const { register, login } = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/follow/:id").post(isAuthenticated, follow);

module.exports = router;
