var express= require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var bodyParser = require("body-parser");
var cookiParser = require("cookie-parser");
var session = require("express-session");
var flash= require("express-flash");
var nocache = require("nocache");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookiParser());
app.use(session({secret:"TSSNEW"}));
app.use(flash());
app.use(nocache());
var userArr =[];

app.use(function(req,res,next){
	res.locals.session=req.session;
	next();
});
app.use(require("./config/routes")(io));

http.listen(3000, function(err){
	if(err){
		console.log("Server running error", err);
		return;	}
		console.log("Server Running");
});