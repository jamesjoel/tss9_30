var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");

app.set("view engine", "ejs");
// app.set("views", "pages");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, function(){
	console.log("RUNNING");
});