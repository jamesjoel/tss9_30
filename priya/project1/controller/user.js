var express=require("express");
var routes= express.Router();

routes.get("/", function(req,res)
{
	var pagedata{pagename:"user/index" title:"Dashboard"}
	res.render("layout",pagedata);
});
modules.exports=routes;