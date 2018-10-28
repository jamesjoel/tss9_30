var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.use(express.static(__dirname+"/public"));

app.get("/",function(req, res){
	var a = "anil";
	var b = "varandani";
	var arr = ["red","green","yellow",24];

	var data = [
			{
				name : "anil",
				city : "indore",
				mob : 99,
			},
			{
				name : "mohit",
				city : "indore",
				mob : 98,
			},
			{
				name : "priyanka",
				city : "Bhopal"
				mob : 89,
			},
			{
				name : "priya",
				city : "gwl",
				mob : 79,
			},
	]

	var obj = {f_name : a, l_name : b, arr : arr, data : data};

	res.render("index",obj);
});

app.listen(3000, function(req,res){
	console.log("Server is Running");
});