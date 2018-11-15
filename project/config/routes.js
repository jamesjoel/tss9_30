var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/login", require("../controllers/login"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/user", require("../controllers/user"));


module.exports=routes;

