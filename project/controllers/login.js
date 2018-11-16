var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function(req, res){
	var pagedata = { 
						title : "Login", 
						pagename : "login/index", 
						message : req.flash("msg")
				};
	res.render("layout", pagedata);
});



routes.post("/", function(req, res){
	var u = req.body.username;
	var p = req.body.password;
	user.find({ username : u}, function(err, result){
		if(result.length>0)
		{
			// console.log(result);
			if(result[0].password == sha1(p))
			{
				req.session._id = result[0]._id;
				req.session.full_name = result[0].full_name;
				req.session.is_user_logged_in = true;



				res.redirect("/user");
			}
			else
			{
				req.flash("msg", "Password Incorrect");
				res.redirect("/login");	
			}
		}
		else
		{
			req.flash("msg", "Username and Password Incorrect");
			res.redirect("/login");
		}
	});

});


module.exports=routes;