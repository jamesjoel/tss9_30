var express=require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("index");
});

app.listen(3000, function(err){
	if(err){
		console.log("Server error",err);
		return;	}
		console.log("server running");
});