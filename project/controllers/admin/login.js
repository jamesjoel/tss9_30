var express = require("express");
var routes = express.Router();
var admin = require("../../models/admin");
var sha1 = require("sha1");

routes.get("/", function(req, res){
	var pagedata = { title : "Login", pagename : "admin/login", message : req.flash("msg")};
	res.render("admin_layout", pagedata);

});


routes.post("/", function(req, res){
	var u = req.body.username;
	var p = req.body.password;

	admin.find({ username : u }, function(err, result){
		if(result.length>0)
		{
			if(result[0].password == sha1(p))
			{
				req.session.is_admin_logged_in=true;
				res.redirect("/admin/dashboard");
			}
			else
			{
				req.flash("msg", "This Password Incorrect");
				res.redirect("/admin");
			}
		}
		else
		{
			req.flash("msg", "This Username And Password Incorrect");
			res.redirect("/admin");
		}
	});

});




module.exports=routes;