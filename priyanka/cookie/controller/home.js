var express= require("express");
var routes= express.Router();
var stu = require("../model/student");

routes.get("/",function(req,res){
	var pagedata = {title:"Home Page", pagename:"home/index"};
	res.render("layout", pagedata);
});


routes.post("/", function(req,res){
	stu.insert(req.body,function(err,result){
		if(err){
			console.log("Insertion error",err);
			return;	}
		res.redirect("/");	
	});
});

routes.get("/view",function(req,res){
	stu.find({}, function(err,result){
		if(err){
			console.log("Viewing error",err);
			return; }
	var pagedata = {title:"View page", pagename:"home/view", result:result};
	res.render("layout", pagedata);	
	});
});
module.exports = routes;