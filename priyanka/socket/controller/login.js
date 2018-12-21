var express= require("express");
var routes = express.Router();
var user= require("../model/user");
var sha1 = require("sha1");

module.exports = function(io){
	routes.get("/", function(req,res){
		var pagedata = {title:"Login page", pagename : "login/index", msg :req.flash("msg"), msgsuccess: req.flash("msgsuccess")};
		res.render("layout",pagedata);
	});

	routes.post("/",function(req,res){
		user.find({username : req.body.username},function(err,result){
			if(err){
				console.log("Login Finding error",err);
				return;	}
			if(result.length>0){
				if(result[0].password ==sha1(req.body.password)){
					req.session.username = result[0].username;
					req.session.password = result[0].password;
					req.session.is_user_logged_in=true;
					res.redirect("/user");
				}else{
				req.flash("msg", "Password Incorrect");
				res.redirect("/");	
				}
				}else{
				req.flash("msg", "Username and Password Incorrect");
				res.redirect("/");
			}	
		});
	});
	return routes;
}