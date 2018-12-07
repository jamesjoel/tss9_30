var express = require("express");
var routes = express.Router();
var employee = require("../model/employee");


routes.get("/", function(req, res){

	employee.find(function(err, result){
		// console.log(result);
		result = JSON.parse(JSON.stringify(result));



		var pagedata = { title : "Home", pagename : "index", result : result};
		res.render("layout", pagedata);
	});


});

module.exports=routes;