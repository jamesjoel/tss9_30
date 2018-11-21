var express = require("express");
var routes = express.Router();
var category = require("../../models/category");
var mongodb = require("mongodb");



routes.get("/add", function(req, res){
	var pagedata = { title : "Add New Category", pagename : "admin/add_category"};
	res.render("admin_layout", pagedata);
});

routes.post("/add", function(req, res){
	category.insert(req.body, function(err, result){
		res.redirect("/admin/category/add");
	});
});

routes.get("/view", function(req, res){
	category.find({}, function(err, result){
		var pagedata = { title : "View All Category", pagename : "admin/view_category", result : result};
		res.render("admin_layout", pagedata);
		
	});	





});

routes.get("/edit/:id", function(req, res){
	var id = req.params.id;
	category.find({ _id : new mongodb.ObjectId(id)}, function(err, result){
		var pagedata = { title : "Edit Category", pagename : "admin/edit_category", result : result[0]};
		res.render("admin_layout", pagedata);
	});

	
});
routes.post("/edit", function(req, res){
	var where = { _id : new mongodb.ObjectId(req.body.id)};
	var obj = { name : req.body.name };
	category.update(where, obj, function(err, result){
		res.redirect("/admin/category/view");
	});
});



routes.get("/delete/:a", function(req, res){
	// console.log(req.params);
	var id = req.params.a;
	category.delete({ _id : new mongodb.ObjectId(id) }, function(err, result){
		res.redirect("/admin/category/view");
	});
});





module.exports=routes;
