var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log ("server Running");
});


var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.use(express.static(__dirname+"/public"));



app.get("/", function(req, res){

	var obj = { };

	res.render("task1", obj);
});