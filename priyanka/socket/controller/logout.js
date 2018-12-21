var express=require("express");
var routes=express.Router();
routes.get("/", function(req,res){
	req.session.destroy();
	res.redirect("/");
});
module.exports=routes;