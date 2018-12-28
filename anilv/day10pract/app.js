var express = require("express");
var app = express();
// var routes = require("./config/routes");
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://james:james123@ds139534.mlab.com:39534', function(err, client) {
	if(err){
		console.log("ERROR ------", err);
		return;
	}
	var db = client.db("mydb")
  console.log("Connected correctly to server.", db);
  
});

