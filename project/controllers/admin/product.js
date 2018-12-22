var express = require("express");
var routes = express.Router();
var category = require("../../models/category");
var product = require("../../models/product");
var mongodb = require("mongodb");
var namechange=require("../../helpers/namechange");
var path = require("path");


module.exports=function(io){


routes.get("/view", function(req, res){
	product.findProductCate(function(err,result){
	var pagedata = { title : "View All Product", pagename : "admin/view_product", result : result};
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
routes.post("/edit", function(req, res){
	var where = { _id : new mongodb.ObjectId(req.body.id)};
	delete req.body.id;
	product.update(where, req.body, function(err, result){
		res.redirect("/admin/product/view");
	});
});

routes.get("/add", function(req, res){
	category.find({}, function(err, result){
		var pagedata = { title : "Add New Product", pagename : "admin/add_product", result : result, message : req.flash("msg")};
		res.render("admin_layout", pagedata);

	});



});

routes.post("/add", function(req, res){
	var arr = namechange(req.files.image.name);
	var name = arr[0];
	var ext = arr[1];
	var dir = path.resolve();
	if(ext == "jpg" || ext == "jpeg" || ext == "png" || ext =="gif")
	{
		req.files.image.mv(dir+"/public/products/"+name, function(err){

			req.body.image = name;
			req.body.price = parseInt(req.body.price);
			req.body.discount = parseInt(req.body.discount);

			product.insert(req.body, function(err, result){
				console.log(result);
				io.emit("demo", result.ops[0]);
				res.redirect("/admin/product/view");
			});

		});
		
	}
	else
	{
		req.flash("msg", "This File Type Not Allowed");
		res.redirect("/admin/product/add");
	}


});


routes.get("/demo/:a/:b/:c", function(req, res){
	console.log(req.params);
});
	return routes;
}


