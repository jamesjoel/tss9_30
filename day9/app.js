var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));



app.use(function(req, res, next){
	res.locals.logo = "JMAES";
	
	next();
});











app.get("/", function(req, res){
	
	var name = "James";
	var obj = { pagename : "index", title : "Home", name : name };
	res.render("layout", obj);
});


app.get("/about", function(req, res){
	var obj = { pagename : "about", title : "About" };
	res.render("layout", obj);
});
app.get("/contact", function(req, res){
	var obj = { pagename : "contact", title : "Contact" };
	res.render("layout", obj);
});







app.listen(3000, function(){
	console.log("Running");
});