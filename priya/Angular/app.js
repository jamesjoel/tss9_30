var express=require("express");
var app=express();

app.set("view engine","express");

app.use(static.express(__dirname+"/public"));

app.get("/",function(req,res){
	res.render("index");
}

// edit
app.listen(3000,function(){
	console.log("Server Running");
});