var express = require("express");
var app = express(); 
var bodyParser = require("body-parser");
var upload = require("express-fileupload");
var crypto = require("crypto");


app.use(upload());


app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});

app.post("/save", function(req, res){
	// console.log(req.files);
	// console.log(req.files.photo.name);
	var crypt_name =crypto.randomBytes(20).toString('hex');
	var file = req.files.photo;


	var name = req.files.photo.name;
	var arr = name.split(".");
	var n = arr.length;
	var ext = arr[n-1];
	var new_name = crypt_name+"."+ext;
	file.mv(__dirname+"/images/"+new_name, function(err){
		if(err){
			console.log("Upload Error", err);
			return;
		}
	});
});


app.listen(3000, function(){
	console.log("RUNNING");
});