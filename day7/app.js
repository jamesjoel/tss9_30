var express = require('express');
var app = express();

app.get("/about", function(req, res){
	// res.send("<h1>this is about page</h1>");
	res.sendFile(__dirname+"/about.html");
});

app.get("/contact", function(req, res){
	// res.send("this is contact page");
	res.sendFile(__dirname+"/contact.html");
});

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
	// console.log(__filename);

	// res.send("<center><h1>This is Home Page</h1></center><a href='/about'>About</a><a href='/contact'>Contact</a>");
});



app.listen(3000, function(){
	console.log("Server Running");
});