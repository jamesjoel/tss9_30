var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser());

app.listen(3000);


app.get("/:id", function(req, res){
	console.log(req);
	res.send({ name : "rohit", city : "indore"});
});

app.post("/", function(req, res){
	console.log(req.body);
});

app.put("/", function(req, res){
	//update
});

app.delete('/', function(req, res){
	// delete
});
