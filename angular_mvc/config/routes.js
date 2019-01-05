var express = require("express");
var routes = express.Router();

routes.use("/", require("../controller/login"));
routes.use("/user", backdoor, require("../controller/user"));
routes.use("/webservice", require("../controller/webservice"));



function backdoor(req, res, next){
	if(! req.session.is_user_logged_in){
		res.redirect("/");
		return;
	}
	next();

}
module.exports=routes;