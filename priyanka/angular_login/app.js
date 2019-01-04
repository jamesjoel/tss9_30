var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var session=require("express-session");
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret:"TssNew"}));
app.use(require("./config/routes"));
app.listen(3000,function(err){
	if(err){
	console.log("Server running error",err);
	return; }
	console.log("Server running");
});