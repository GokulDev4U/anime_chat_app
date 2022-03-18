const express = require("express");

const app = express();

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
// import the routes
const post = require("../controllers/posts");
// using the routes
app.use("/api/v1", post);
module.exports = app;
