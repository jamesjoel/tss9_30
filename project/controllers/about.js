var express = require("express");
var routes = express.Router();



routes.get("/", function(req, res){
	res.clearCookie("pid");
	var pagedata = { title : "About", pagename : "about/index"}
	res.render("layout", pagedata);
});
routes.get("/info", function(req, res){
	var pagedata = { title : "About", pagename : "about/index"}
	res.render("layout", pagedata);
});


module.exports=routes;