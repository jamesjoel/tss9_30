var express= require ("express");
var routes=ëxpress.Router();

routes.get("/", function(req,res){
	var pagedata={title:"About", pagename:"about"}
	res.render=("layout",pagedata);
});

module.exports=routes;

