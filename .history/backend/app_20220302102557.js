const express = require("express");

const app = express();

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const post = require("../controllers/posts");

app.use("/api/v1", post);
module.exports = app;
