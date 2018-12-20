var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
	res.render("index");
});


app.get("/demo", function(req, res){
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
		var db = client.db("tss9");
		db.collection("product").find().toArray(function(err, result){
			res.send(result);
		});
	});
});


app.listen(3000, function(){
	console.log("Server Running");
});