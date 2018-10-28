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

//error is coming at mob 
// Anils-MacBook-Pro:day9pract anilvarandani$ node app.js
// /Users/anilvarandani/Desktop/nodeAnil/tss9_30/anilv/day9pract/app.js:27
// 				mob : 89,
// 				^^^

// SyntaxError: Unexpected identifier
//     at createScript (vm.js:80:10)
//     at Object.runInThisContext (vm.js:139:10)
//     at Module._compile (module.js:617:28)
//     at Object.Module._extensions..js (module.js:664:10)
//     at Module.load (module.js:566:32)
//     at tryModuleLoad (module.js:506:12)
//     at Function.Module._load (module.js:498:3)
//     at Function.Module.runMain (module.js:694:10)
//     at startup (bootstrap_node.js:204:16)
//     at bootstrap_node.js:625:3



app.listen(3000, function(){
	console.log("Running");
});