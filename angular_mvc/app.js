var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
// var MongoClient = require("mongodb").MongoClient;
 


// var client = new MongoClient(url, { useNewUrlParser: true });
// client.connect(function(err, client){
// 	var db = client.db("mydb");
// 	db.collection("user").find().toArray(function(err, result){
//  	console.log(result);
//   client.close();
//  })
  
// });






app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS" }));


app.use(require("./config/routes"));


app.listen(3000, function(){
	console.log("RUNNING");
});