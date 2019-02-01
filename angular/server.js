var express = require('express');
var app = express();


app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));

app.listen(3000, function(){
	console.log("Server Running");
});

app.get("/", function(req, res){
	res.sendFile(__dirname+"/views/demo.html");
});