const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { path } = require("");
path;

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//using Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// import the routes
const post = require("./routes/post");
const user = require("./routes/user");

// using the routes
app.use("/api/v1", post);
app.use("/api/v1", user);

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
