var express= require("express");
var routes = express.Router();
var mongodb =  require("mongodb");

routes.get("/c_create/:id",function(req,res){
	if(req.cookies.starid){
		var oldid = req.cookies.starid;
		var newid = req.params.id+"#"+oldid;
		res.cookie("starid", newid , {expire:new Date(Date.now()+3600000), httpOnly:true});
		console.log(newid);
	}else{
		var id=req.params.id;
		res.cookie("starid",id,{expire:new Date(Date.now()+3600000), httpOnly:true});
	}
	console.log(req.cookies.starid);
	res.redirect("/view");
});

routes.get("/c_delete/:id",function(req,res){
		var oldid = req.cookies.starid;
		var arr = oldid.split("#");
		var n = arr.indexOf(req.params.id);
		arr.splice(n, 1);
		var str = arr.join("#");


		res.cookie("starid", str , {expire:new Date(Date.now()+3600000), httpOnly:true});

	res.redirect("/view");
});




routes.get("/clear", function(req, res){
	res.clearCookie("starid");
	res.redirect("/view");
})

routes.get("/delete/:id",function(req,res){
	var id = req.params.id;
	var stid = req.cookies.starid;
	var starid_arr = stid.split("#");
	var n = starid_arr.indexOf(id);
	starid_arr.splice(n,1);
	stid = starid_arr.join("#");
	res.cookie("starid", stid, {expire:new Date(Date.now()+3600000), httpOnly:true});
	res.redirect("/view");
});
module.exports = routes;
	