var express= require("express");
var routes= express.Router();
var newimages = require("../model/newimages");
var namechange = require("../helper/namechange");
var path = require("path");
var flash =require("express-flash");
var mongodb = require("mongodb");

routes.get("/", function(req,res){
	newimages.find({}, function(err,result){
		if(err){
			console.log("Find error in controller",err);
			return; };
	var pagedata = {title : "Image Upload", pagename:"home/index", message : req.flash("msg")};
	res.render("layout",pagedata);
});
});

routes.post("/", function(req,res){
	var arr= namechange(req.files.image.name);
	var name = arr[0];
	var ext = arr[1];
	var upload_path = path.resolve();
	if(ext=="jpg"||ext=="jpeg"||ext=="png"||ext=="gif"){
	req.files.image.mv(upload_path+"/public/images/"+name, function(err){
		if(err){
			console.log("Upload error",err);
			return;	}
		req.body.image = name;	
	newimages.insert(req.body,function(err,result){
		if(err){
		console.log("Insertion error in controller",err);	
		return; }
		// console.log(req.files.image);
	res.redirect("/");
	});
	});
	}else{
		req.flash("msg","This file type not supported");
		res.redirect("/");
	}
});

routes.get("/view",function(req,res){
		newimages.find({}, function(err,result){
		if(err){
			console.log("view error",err);
			return;	}
		var pagedata = {title:"View Page", pagename:"home/view",result:result};
		res.render("layout",pagedata);	
	});
});

routes.get("/delete/:id",function(req,res){
	var id=req.params.id;
	newimages.delete({_id : new mongodb.ObjectId(id)}, function(err,result){
		if(err){
			console.log("Deletion error", err);
			return;	}
		res.redirect("/view");	
	});
});



module.exports = routes;