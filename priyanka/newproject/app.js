var express = require("express");
var app = express();
var bodyParser=require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var nocache = require("nocache");
var flash = require("express-flash");


app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret : "TSS9"}));
app.use(nocache());
app.use(flash());
app.use(function(req,res,next)
{
    res.locals.session = req.session;
    next();
});


var routes = require("./config/routes");

app.set("view engine","ejs");
app.use(routes);

app.listen(3000,function()
{
    console.log("Server Running");
});