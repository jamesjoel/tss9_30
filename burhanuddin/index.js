const express = require("express");
const app = express();
const http = require("http").Server(app);
const routes = require("./config/router");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.setHeader("Content-Type", "application/json");
  next();
});
*/
app.use(routes());

http.listen("3000", function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server is running on port : 3000");
});
