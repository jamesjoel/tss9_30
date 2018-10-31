var express= require(express);
var route=express.Router();

routes.get("/",function(req,res){
	var pagedata={title:"Home", pagename:"index"};
	res.render("layout", pagedata);
});
module.exports=routes;
