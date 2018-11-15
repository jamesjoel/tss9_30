var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var nocache = require("nocache");
var flash = require("express-flash");


app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS" }));
app.use(nocache());
app.use(flash());






var routes = require("./config/routes");
app.set("view engine", "ejs");
// app.set("views", "pages");
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, function(){
	console.log("RUNNING");
});