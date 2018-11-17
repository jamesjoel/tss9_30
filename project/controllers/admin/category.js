var express = require("express");
var routes = express.Router();
var category = require("../../models/category");

routes.get("/add", function(req, res){
	var pagedata = { title : "Add New Category", pagename : "admin/add_category"};
	res.render("admin_layout", pagedata);
});

routes.post("/add", function(req, res){
	category.insert(req.body, function(err, result){
		res.redirect("/admin/category/add");
	});
});
module.exports=routes;
