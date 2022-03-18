const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//using Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// import the routes
const post = require("./routes/post");
const user = require("./routes/user");

// using the routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
