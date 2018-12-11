var express = require("express");
var routes = express.Router();

routes.use("/", require("../controller/home"));

module.exports=routes;