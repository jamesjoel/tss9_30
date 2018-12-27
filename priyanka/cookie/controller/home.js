var express= require("express");
var routes= express.Router();
var stu = require("../model/student");
var mongodb = require("mongodb");

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
routes.get("/edit/:id", function(req,res){
	var id = req.params.id;
	stu.find({_id : new mongodb.ObjectId(id)}, function(err,result){
		if(err){
			console.log("Edit error",err);
			return; }
		var pagedata={title:"Edit Page", pagename : "home/edit", result : result[0]};
		res.render("layout", pagedata);	
	});
});
routes.post("/edit",function(req,res){
	var where = {_id : new mongodb.ObjectId(req.body.id)};
	delete req.body.id;
	// console.log(req.body);
	var new_obj ={full_name : req.body.name, age : req.body.new_age, fee: req.body.new_fee};
	console.log(new_obj);
	stu.update(where, new_obj ,function(err,result){
		if(err){
			console.log("Edit post error",err);
			return;	}
			console.log(new_obj);
		res.redirect("/view");	
	});
});
module.exports = routes;