var express = require ('express');
var app = express();

var a = "anil";
app.get("/", function(req,res){
					res.sendFile(__dirname+"/index.html");

});

app.get("/about", function(req, res){
					res.sendFile(__dirname+"/about.html");

});

app.get("/contact", function(req, res){
					res.sendFile(__dirname+"/contact.html");
});

app.listen(3000, function(){
				console.log("server is running");
});