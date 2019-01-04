var express=require("express");
var routes=express.Router();
var user=require("../../model/user");
routes.post("/checkusername",function(req,res){
	user.find({username:req.body.username},function(err,result){
		if(err){
			console.log("User Find error",err);
			return;	}
		res.send(String(result.length));	
	});	
});
module.exports=routes;