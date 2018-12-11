var express = require("express");
var routes = express.Router();
var stu = require("../model/student");
routes.get("/", function(req, res){
	stu.find({}, function(err, result){

		var pagedata = { title : "Home", pagename : "student/index", result : result};
		res.render("layout", pagedata);
	})
});
routes.post("/", function(req, res){
	stu.insert(req.body, function(err, result){
		res.redirect("/");
	});
});

module.exports=routes;