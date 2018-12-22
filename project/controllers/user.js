var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo = require("mongodb");
var namechange = require("../helpers/namechange");
var path = require("path");
var sha1 = require("sha1");
routes.get("/", function(req, res){
	var id = req.session._id;
	user.find({ _id : new mongo.ObjectId(id)}, function(err, result){

	


	var pagedata = { title : "Dashboard", pagename : "user/index", result : result[0], message : req.flash("msg")}
	res.render("layout", pagedata);
	});
});
routes.get("/changeimg", function(req, res){
	var pagedata = { title : "Change Image", pagename : "user/changeimg"}
	res.render("layout", pagedata);
});

routes.post("/changeimg", function(req, res){
	var arr = namechange(req.files.image.name);
	var name = arr[0];
	var id = req.session._id;
	var upload_path = path.resolve();
	req.files.image.mv(upload_path+"/public/user/"+name, function(err){
		user.update({ _id : new mongo.ObjectId(id)}, { image : name }, function(err, result){
			res.redirect("/user");
		});
	});
});
routes.get("/changepass", function(req, res){
	var pagedata = { title : "Change Pass", pagename : "user/changepass", message : req.flash("msg")};
	res.render("layout", pagedata);
});

routes.post("/changepass", function(req, res){
	var a = req.body.c_pass;
	var b = req.body.n_pass;
	var c = req.body.cn_pass;
	var id = req.session._id;
	user.find({ _id : new mongo.ObjectId(id)}, function(err, result){
		if(result[0].password == sha1(a))
		{
			if(b == c)
			{
				user.update({ _id : new mongo.ObjectId(id)}, { password : sha1(b)}, function(err, result){

					req.flash("msg", "Your Password Chnage Successfuly");
					res.redirect("/user");
				});
			}
			else
			{
				req.flash("msg", "The New and Confirm Password incorrect");
				res.redirect("/user/changepass");
			}
		}
		else
		{
			req.flash("msg", "The Currect Password incorrect");
			res.redirect("/user/changepass");
		}
	});

});



module.exports=routes;