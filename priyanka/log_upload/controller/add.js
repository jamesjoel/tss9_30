var express= require("express");
var routes = express.Router();
var namechange = require("../helper/namechange");
var path = require("path");
var images = require("../model/images");

routes.get("/", function(req,res){
	images.find({}, function(err,result){

	var pagedata = {title:"Add Image",pagename:"add/index",message:req.flash("msg")};
	res.render("layout",pagedata);
});
});


routes.post("/",function(req,res){
					// console.log(req.files);
	var arr = namechange(req.files.image.name);
	var name =arr[0];
	var ext = arr[1];
	var upload_path = path.resolve();
	if(ext=="jpg" || ext=="jpeg"|| ext == "png" ||ext=="gif"){
		req.files.image.mv(upload_path+"/public/images/"+name, function(err){
			if(err){
				console.log("Image upload error",err);
				return;	}
			req.body.image = name;
			images.insert(req.body,function(err,result){
				if(err){
					console.log("Image insertion error",err);
					return;	}
				res.redirect("/view");	
			});
		});
	}else{
		req.flash("msg", "This file type not supported");
		res.redirect("/add");
	}
});



module.exports = routes;