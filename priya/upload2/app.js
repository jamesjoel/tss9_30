var express=require("express");
var app=express();
var body_parser=require("body-parser");
var upload=require("express-fileupload");
var session=require("express-session");
var cookie_parser=require("cookie-parser");
var flash = require("express-flash");
var routes=require("./config/routes");

app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));
app.use(body_parser());
app.use(cookie_parser());
app.use(session({secret:"TSSNEW"}));
app.use(upload());
app.use(flash());
app.use(routes);




app.listen(3000,function(err){
	if(err){
		console.log("Server Error",err);
		return;
	}
	console.log("Server Running");
});