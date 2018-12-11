var express=require("express");
var app = express();
var bodyParser= require("body-parser");
var routes= require("./config/routes");
var sha1 = require("sha1");
var session = require("express-session");
var flash = require("express-flash");
var nocache = require("nocache");
var upload = require("express-fileupload");
var cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser());
app.use(session({secret : "MYCHOICE"}));
app.use(flash());
app.use(nocache());
app.use(upload());

app.use(function(req,res,next){
	res.locals.session = req.session;
	next();  });

app.use(routes);
app.listen(3000,function(){
		console.log("Server Running");
});