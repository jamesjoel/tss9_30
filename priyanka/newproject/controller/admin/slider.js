var express=require("express");
var routes=express.Router();
var mongo=require("mongodb");
var namechange=require("../../helpers/namechange");
var slider=require("../../models/slider");
var path=require("path");
routes.get("/add",function(req,res){
	slider.find({},function(err,result){
		if(err){
			console.log("Find error in slider",err);
			return;	}
	var pagedata={title:"Slider Image",pagename:"slider/index"};
	res.render("layout",pagedata);
});
});
routes.post("/add",function(req,res){
	// console.log(req.files);
	var arr=namechange(req.files.sliderimg.name);
	var name=arr[0];
	var ext=arr[1];
	var upload_path=path.resolve();
	if(ext == "jpg" || ext == "jpeg" ||ext=="png" || ext=="gif"){
		req.files.sliderimg.mv(upload_path+"/public/sliderimages/"+name,function(err){
			if(err){
				console.log("Image moving error",err);
				return;	}
		req.body.slider_image=name;
		slider.insert(req.body,function(err,result){
		if(err){
			console.log("slider error",err);
			return;	}
			res.redirect("/admin/dashboard");
		});
	});
	}
});
module.exports=routes;