var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var nocache = require("nocache");
var flash = require("express-flash");
var sha1 = require("sha1");
var upload = require("express-fileupload");

var category = require("./models/category");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS" }));
app.use(nocache());
app.use(flash());
app.use(upload());


app.use(function(req, res, next){
	var total = 0;
	if(req.cookies.pid){
		var ids = req.cookies.pid;
		var arr = ids.split("#");
		total = arr.length;
	}
	res.locals.total = total;
	res.locals.session = req.session;
	category.find({}, function(err, result){
		res.locals.category=result;
		next();
	});
});








// var routes = require("./config/routes");
app.set("view engine", "ejs");
// app.set("views", "pages");
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./config/routes"));

app.listen(3000, function(){
	console.log("RUNNING");
});