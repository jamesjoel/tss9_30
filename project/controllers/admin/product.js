var express = require("express");
var routes = express.Router();
var category = require("../../models/category");
var product = require("../../models/product");
var mongodb = require("mongodb");

routes.get("/view", function(req, res){
	product.find({}, function(err, result){
		var pagedata = { title : "View All Product", pagename : "admin/view_product", result: result};
		res.render("admin_layout", pagedata);
	});
});
routes.get("/delete/:id", function(req, res){
	product.delete({ _id : new mongodb.ObjectId(req.params.id)}, function(err, result){
		res.redirect("/admin/product/view");
	});
});

routes.get("/edit/:id", function(req, res){
	product.find({ _id : new mongodb.ObjectId(req.params.id)}, function(err, result1){
		category.find({}, function(err, result2){
			var pagedata = { title : "Editn Product", pagename : "admin/edit_product", result1: result1[0], result2 : result2};
			res.render("admin_layout", pagedata);

		});
	});

});

routes.get("/add", function(req, res){
	category.find({}, function(err, result){
		var pagedata = { title : "Add New Product", pagename : "admin/add_product", result : result};
		res.render("admin_layout", pagedata);

	});


});

routes.post("/add", function(req, res){
	product.insert(req.body, function(err, result){
		res.redirect("/admin/product/view");
	});
});


routes.get("/demo/:a/:b/:c", function(req, res){
	console.log(req.params);
});



module.exports=routes;