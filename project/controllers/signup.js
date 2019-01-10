var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");


routes.get("/", function(req, res){
	var pagedata = { title : "Register", pagename : "signup/index"}
	res.render("layout", pagedata);
});
routes.post("/", function(req, res){

	
	req.body.password = sha1(req.body.password);

	// var obj = { fullname : req.body.full_name };
	user.insert(req.body, function(err, result){
		console.log(result);
		res.redirect("/login");	
	});
});

routes.post("/checkusername", function(req, res){
	var u = req.body.user;
	user.findandcount({ username : u}, function(err, result){
		console.log(result);
		res.send(String(result));
	});
});

module.exports=routes;