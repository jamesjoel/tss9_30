var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var mongo = require("mongodb");




app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

app.get("/", function(req, res){
	res.render("index");
});

app.get("/getall", function(req, res){
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
			var db = client.db("tss9");
			db.collection("student").find().toArray(function(err, result){
				res.send(result);
			});
		});
});






app.post("/", function(req, res){
	
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
		var db = client.db("tss9");
		db.collection("student").insert(req.body, function(err, result){
			res.send(result.ops[0]);
			// console.log(result);
		});
	});


});

app.post("/delete", function(req, res){
	console.log(req.body);
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
			var db = client.db("tss9");
			db.collection("student").remove({_id : new mongo.ObjectId(req.body._id)}, function(err, result){
				res.send(result);
			});
		});

});	




app.listen(3000, function(){
	console.log("Server Running");
});