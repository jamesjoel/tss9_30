var express= require('express');
var route=express.Router();

route.get("/",function(req,res){
	var pagedata={title:"Home", pagename:"index"};
	res.render("layout", pagedata);
});
module.exports=route;
