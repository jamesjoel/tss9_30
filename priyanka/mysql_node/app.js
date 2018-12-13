var express= require("express");
var app = express();
var bodyParser =require("body-parser");
var routes= require("./config/routes");

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser());
app.use(routes);
app.listen(3000,function(err){
	if(err){
		console.log("Server not running", err);
		return; }
		console.log("Server Running");
});