var express=require ("express");
var routes=express.Router();

routes.get("/",function(req,res)
{
	var pagedata={pagename:"about/index",title:About};
	res.render("layout",pagedata);
});
module.exports=routes;
