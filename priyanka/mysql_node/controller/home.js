var express= require("express");
var routes = express.Router();
var employee = require("../model/employee");
routes.get("/", function(req,res){
	employee.find(function(err,result){
		result = JSON.parse(JSON.stringify(result));
		var pagedata= {title:"HomePage", pagename :"home/index", result : result};
		res.render("layout", pagedata);
	});
});
routes.post("/", function(req,res){
	employee.insert(req.body,function(err,result){
		res.redirect("/");
	});
});	
routes.get("/delete/:id",function(req,res){
	var id = req.params.id;
	employee.delete(id,function(err,result){
		res.redirect("/");
	});
});
routes.get("/edit/:id", function(req,res){
	var id= req.params.id;
	employee.findbyid(id,function(err,result){
		result = JSON.parse(JSON.stringify(result));
		var pagedata= {title:"Edit", pagename :"home/edit", result : result};
		res.render("layout", pagedata);
	});
});	

routes.post("/edit", function(req,res){
	var id = req.body.id;
	employee.update(id,req.body,function(err,result){
		res.redirect("/");
	});
});
module.exports=routes;