var express = require('express');
var app = express();

var a = "rohit";
app.get("/about", function(req, res){
	res.sendFile(__dirname+"/about.html");
});

app.get("/contact", function(req, res){
	res.sendFile(__dirname+"/contact.html");
});

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});



app.listen(3000, function(){
	console.log("Server Running");
});