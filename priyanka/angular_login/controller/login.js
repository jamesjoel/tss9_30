var express=require("express");
var routes=express.Router();
// var user=require("../model/user");
routes.get("/",function(req,res){
		res.render("login/index");
});
// routes.get("/show",function(req,res){
// 	user.find({},function(err,result){
// 		console.log(result);
// 	});
// });
module.exports=routes;