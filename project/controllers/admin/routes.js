var express = require("express");
var routes = express.Router();

routes.use("/", require("./login"));
// routes.use("/dashboard", require("./dashboard"));


module.exports=routes;