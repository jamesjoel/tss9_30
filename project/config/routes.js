var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/login", require("../controllers/login"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/cart", require("../controllers/cart"));
routes.use("/search", require("../controllers/search"));



routes.use("/user", backdoor, require("../controllers/user"));


routes.use("/admin", require("../controllers/admin/routes"));


function backdoor(req, res, next)
{
	if(! req.session.is_user_logged_in)
	{
		res.redirect("/login");	
		return;
	}
	next();
}


routes.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/login");
});



module.exports=routes;

