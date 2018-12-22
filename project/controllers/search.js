var express = require("express");
var routes = express.Router();
var product = require("../models/product");

routes.get("/get", function(req, res){
	var where = { $and : [{ price : { $gt : 10000 }}, { discount : { $gt : 7}}]};



	product.find(where, function(err, result){
		var pagedata = { title : "Search", pagename : "search/index", product : result}
		res.render("layout", pagedata);

	});


});


module.exports=routes;