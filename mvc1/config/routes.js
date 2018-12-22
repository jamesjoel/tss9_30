var express = require("express");
var routes = express.Router();





routes.use("/", require("../controller/show"));









module.exports=routes;