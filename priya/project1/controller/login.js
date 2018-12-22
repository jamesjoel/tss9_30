var express= require ("express");
var routes=express.Router();
// var user=require ("../models/user");


routes.get("/", function (req,res){
    var pagedata={pagename:"login/index",title:"login"};
    res.render("layout",pagedata);
    });

routes.post("/",function(req,res)
{
	
	console.log(req.body);
	// var u=req.body.username
	// var p= req.body.password

});
module.exports=routes;