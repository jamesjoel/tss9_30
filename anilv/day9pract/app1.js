var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.get("/homepage",function(req, res){
	res.render(__dirname+"/homepage");
});

app.listen(3000,function(req,res){
	console.log("Server is Running")
});