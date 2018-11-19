var express = require("express");
var app = express();


app.use(require("./config/routes"));


// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017";
// var url = "mongodb://localhost:27017/DBNAME";

app.set("view engine", "ejs");

// app.get("/", function(req, res){
// 	MongoClient.connect(url, function(err, client){
// 		var db = client.db("tss5");

// 		db.collection("student").find({}).toArray(function(err, result){
// 			var pagedata = { result : result };
// 			res.render("show", pagedata);
// 		});

// 	});

// });

app.listen(3000, function(){
	console.log("Running");
});