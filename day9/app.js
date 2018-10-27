var express = require("express");
var app = express();

app.set("view engine", "ejs");

// app.set("views", "show");
app.use(express.static(__dirname+"/public"));



app.get("/", function(req, res){
	var a = "rohit";
	var b ="verma";
	var arr = ["red", "green", "blue", "yellow"];

	var user = [
		{
			name : "james",
			age : 25,
			city : "indore"
		},
		{
			name : "rohit",
			age : 25,
			city : "indore"
		},
		{
			name : "jaya",
			age : 24,
			city : "ujjain"
		},
		{
			name : "nilesh",
			age : 30,
			city : "bhopal"
		},
		{
			name : "raj",
			age : 25,
			city : "bhopal"
		},
		{
			name : "gaurav",
			age : 20,
			city : "indore"
		}
		
	];




	var obj = { f_name : a, l_name : b, data : arr, user : user};

	res.render("index", obj);
});




app.listen(3000, function(){
	console.log("Running");
});