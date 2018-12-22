var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var nocache = require("nocache");



app.listen(3000, function(){
	console.log("Running");
});

app.set("view engine", "ejs");
app.use(bodyParser());
app.use(cookieParser());
app.use(nocache());


app.use(session({ secret : "james" }));




app.get("/", function(req, res){
	res.render("home");
});
app.post("/", function(req, res){
	req.session.fullname=req.body.name;
	res.redirect("/about");
});



app.get("/about", function(req, res){
	if(!req.session.fullname)
	{
		res.redirect("/");
		return;
	}
	var obj = { demo : req.session.fullname };
	res.render("about", obj);
});
app.get("/contact", function(req, res){
	if(!req.session.fullname)
	{
		res.redirect("/");
		return;
	}
	var obj = { demo : req.session.fullname };
	res.render("contact", obj);
});
app.get("/help", function(req, res){
	if(!req.session.fullname)
	{
		res.redirect("/");
		return;
	}
	var obj = { demo : req.session.fullname };
	res.render("help", obj);
});
app.get("/logout", function(req, res){
	if(!req.session.fullname)
	{
		res.redirect("/");
		return;
	}
	req.session.destroy();
	res.redirect("/");
});