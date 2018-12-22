var express = require("express");
var routes = express.Router();


module.exports=function(io){

	routes.use("/", require("./login"));
	routes.use("/dashboard", backdoor, require("./dashboard"));
	routes.use("/category", backdoor, require("./category"));
	routes.use("/product", backdoor, require("./product")(io));
	return routes;
}



function backdoor(req, res, next){
	if(! req.session.is_admin_logged_in)
	{
		res.redirect("/");
		return;
	}
	next();
}


