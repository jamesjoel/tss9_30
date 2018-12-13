var express= require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var routes= require("./config/routes");

app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret:"TSSNEW"}));

app.use(function(req,res,next){
	res.locals.starid = req.cookies.starid;
	next();
});

app.use(routes);

app.listen(3000,function(err){
	if(err){
		console.log("Server running error",err);
		return;	}
	console.log("Server Running");	
});