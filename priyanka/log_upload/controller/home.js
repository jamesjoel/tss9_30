var express = require("express");
var routes = express.Router();
var images = require("../model/images");
var mongodb = require("mongodb");
var fs = require("fs");
var namechange = require("../helper/namechange");
var path = require("path");

routes.get("/",function(req,res){
	var pagedata={title: "Home Page", pagename:"home/index"};
	res.render("layout",pagedata);
});

routes.get("/view",function(req,res){
	images.find({}, function(err,result){
		// console.log(result);
		if(err){
			console.log("view error",err);
			return;	}
		// console.log(result);
		var pagedata = {title:"View Page", pagename:"add/view",result:result};
		res.render("layout",pagedata);	
	});
});

routes.get("/delete/:id",function(req,res){
	var id = req.params.id;
	var unlink_path = path.resolve();
	images.find({ _id : new mongodb.ObjectId(id)},function(err,result){
			if(err){
				console.log("Unlink error",err);
				return;	}
		fs.unlink(unlink_path+"/public/images/"+result[0].image ,function(err){
			if(err){
				console.log("Folder image deletion error",err);
				return;	}
				console.log("Image deleted");
	});
	images.delete({_id : new mongodb.ObjectId(id)},function(err,result){
		if(err){
			console.log("Images deletion error",err);
			return;	}
		res.redirect("/view");
		});
	});
});

module.exports = routes;