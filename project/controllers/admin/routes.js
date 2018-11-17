var express = require("express");
var routes = express.Router();

routes.use("/", require("./login"));
routes.use("/dashboard", backdoor, require("./dashboard"));
routes.use("/category", backdoor, require("./category"));



function backdoor(req, res, next){
	if(! req.session.is_admin_logged_in)
	{
		res.redirect("/");
		return;
	}
	next();
}


module.exports=routes;