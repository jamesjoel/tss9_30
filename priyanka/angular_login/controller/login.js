var express=require("express");
var routes=express.Router();
routes.get("/",function(req,res){
		res.render("login/index");
});
module.exports=routes;