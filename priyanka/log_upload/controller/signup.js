var express = require("express");
var routes = express.Router();
var user= require("../model/user");
var sha1 = require("sha1");

routes.get("/",function(req,res){
	var pagedata={title: "Signup Page", pagename:"signup/index"};
	res.render("layout",pagedata);
});

routes.post("/",function(req,res){
	req.body.password = sha1(req.body.password);
	user.insert(req.body ,function(err,result){
		if(err){
			console.log("User signup error in controller",err);
			return;		}
			// console.log(req.body);
		res.redirect("/login");	
	});
});
module.exports = routes;