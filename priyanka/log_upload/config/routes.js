var express=require("express");
var routes=express.Router();

routes.use("/",require("../controller/home"));
routes.use("/contact",require("../controller/contact"));
routes.use("/about", require("../controller/about"));
routes.use("/login",require("../controller/login"));
routes.use("/signup",require("../controller/signup"));
routes.use("/add",require("../controller/add"));

module.exports=routes;
