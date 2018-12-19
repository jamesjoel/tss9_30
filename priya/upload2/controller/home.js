var express=require("express");
var routes=express.Router();
var namechange = require("../helper/namechange");
var path = require("path");
var flash = require("express-flash");
var image = require("../model/image");
var mongodb = require("mongodb");

routes.get("/",function(req,res){
	image.find({},function(err,result){

	var pagedata={title:"Home", pagename:"home/index",result:result , message : req.flash("msg")};
	res.render("layout",pagedata);
	// console.log (result);
});

});

routes.post("/", function(req,res){
	// console.log(req.files);
	var arr = namechange(req.files.photo.name);
	var name = arr[0];
	var ext = arr[1];
	var upload_path = path.resolve();
	if(ext=="jpeg"||ext=="jpg"||ext=="png"||ext=="gif"){
	req.files.photo.mv(upload_path+"/public/images/"+name,function(err){
		req.body.photo = name;
		image.insert(req.body, function(err,result){
			res.redirect("/");
		});
	});
	}else{
		req.flash("msg", "This file extension not supported");
		res.redirect("/");
	}
});

routes.get("/view", function(req,res){
	image.find({}, function(err,result){
				if(err){
			console.log("view error",err);
			return;	}
		var pagedata = {title:"View Page", pagename:"home/index",result:result};
		res.render("layout",pagedata);	
	});
});

routes.get("/delete/:id",function(req,res){
	var id=req.params.id;
	image.delete({_id : new mongodb.ObjectId(id)}, function(err,result){
		if(err){
			console.log("Deletion error", err);
			return;	}
		res.redirect("/");	
	});
});

module.exports=routes;