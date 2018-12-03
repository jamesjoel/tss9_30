var express=require ("express");
var app=express();














var routes=require("./config/routes");
app.use("view engine","ejs");
app.use(routes);


app.listen(3000,function()
{
	console.log("Server Running")
});