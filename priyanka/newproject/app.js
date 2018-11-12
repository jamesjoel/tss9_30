var express = require("express");
var app = express();
var routes = require("./config/routes");
var bodyParser=require("body-parser");

app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));

app.use(bodyParser());

app.use(routes);

app.listen(3000,function()
{
    console.log("Server Running");
});