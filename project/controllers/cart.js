var express = require("express");
var routes = express.Router();
var product = require("../models/product");
var mongo = require("mongodb");

routes.get("/add/:id", function(req, res){
	if(req.cookies.pid)
	{
		var oldid = req.cookies.pid;
		var newids = req.params.id+"#"+oldid;
		res.cookie("pid", newids, { expire : new Date(Date.now()+3600000), httpOnly : true});	

	}
	else
	{
		var id = req.params.id;
		res.cookie("pid", id, { expire : new Date(Date.now()+3600000), httpOnly : true});	
	}
	
	res.redirect("/");
});

routes.get("/mycart", function(req, res){
	var pids = req.cookies.pid;
	var pid_arr = pids.split("#");
	var arr=[];
	pid_arr.forEach(function(item){
		var where = { _id : new mongo.ObjectId(item)}
		arr.push(where);
	});
	product.find(arr, function(err, result){
		console.log(result);
		var pagedata = { title : "My Cart", pagename : "cart/index"};
		res.render("layout", pagedata);
	});

});








module.exports=routes;