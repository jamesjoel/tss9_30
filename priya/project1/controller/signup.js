var express=require("express");
var routes=express.Router();
var user=require("../models/user");
//var sha1=require("sha1");


routes.get("/",function(req,res)
{
	var pagedata={ pagename:"signup/index",title:"Signup"};
	res.render("layout",pagedata);
});
routes.post("/",function(req,res)

{
	//console.log(req.body);
	//var obj ={fullname:req.body.full_name};
	req.body.password= sha1(req.body.password);
	user.insert(req.body,function(err,result){
		if (err){
			console.log("insertion error",err);
			return;
}
console.log(result);
res.redirect("/login");
});

	});


module.exports=routes;