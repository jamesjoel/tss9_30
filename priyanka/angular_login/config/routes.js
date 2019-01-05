var express=require("express");
var routes=express.Router();
routes.use("/login",require("../controller/login"));
routes.use("/user",require("../controller/user"));
routes.use("/webservices",require("../controller/webservices/webservices"));
module.exports=routes;