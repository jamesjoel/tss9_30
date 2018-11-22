var express = require("express");
var routes = express.Router();
var product = require("../models/product");

routes.get("/", function(req, res){
	product.find({}, function(err, result){
		var pagedata = { title : "Home", pagename : "home/index", product : result}
		res.render("layout", pagedata);

	});


});


module.exports=routes;