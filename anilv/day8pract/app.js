var express = require("express");
var app = express(); //calling of constructor

app.set('view engine','ejs'); 

app.get("/", function(req, res){
	res.render('index');
});

app.get("/about",function(req,res){
	res.render('about');
});

app.get("/contact", function(req,res){
	res.render('contact');
});

app.listen(3000,function(){
	console.log("Server is Running");
});