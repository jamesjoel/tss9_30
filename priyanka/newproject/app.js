var express = require("express");
var app = express();
var bodyParser=require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var nocache = require("nocache");
var flash = require("express-flash");
var sha1 = require("sha1");
var category = require("./models/category");
var upload = require("express-fileupload");


app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret : "TSS9"}));
app.use(nocache());
app.use(flash());
app.use(upload());
app.use(function(req,res,next)
{
    var total=0;
    if(req.cookies.pid)
    {
        var ids = req.cookies.pid;
        var arr = ids.split("#");
        total=arr.length;
    }
    res.locals.total=total;
    res.locals.session = req.session;
    category.find({},function(err,result)
    {
        if(err)
        {
            console.log("category find error", err);
            return;
        }
        res.locals.category=result;
        next();
    });
});



var routes = require("./config/routes");

app.set("view engine","ejs");
app.use(routes);

app.listen(3000,function()
{
    console.log("Server Running");
});