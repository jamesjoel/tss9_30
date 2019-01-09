var express=require("express");
var routes=express.Router();
routes.use("/login",require("../controller/login"));
routes.use("/user",backdoor,require("../controller/user"));
routes.use("/webservices",require("../controller/webservices/webservices"));
function backdoor(req,res,next){
	if(!req.session.is_user_logged_in){
		res.redirect("/login");
		return;
	}
	next();
}
module.exports=routes;