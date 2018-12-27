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
	var obj = {full_name:req.body.name, new_city : req.body.city};
	delete req.body.name;
	delete req.body.city;
	var new_obj = {obj : obj , body : req.body};
	user.insert( new_obj ,function(err,result){
		if(err){
			console.log("User signup error in controller",err);
			return;		}
			console.log(new_obj);
		res.redirect("/login");	
	});
});
module.exports = routes;