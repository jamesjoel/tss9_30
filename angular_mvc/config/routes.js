var express = require("express");
var routes = express.Router();

routes.use("/", require("../controller/login"));
routes.use("/user", require("../controller/user"));
routes.use("/webservice", require("../controller/webservice"));

module.exports=routes;