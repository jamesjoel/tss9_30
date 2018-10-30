var express = require("express")
var app=express();

app.set("view engine","ejs");
app.use(express.static(_dirnam+"/public"));

app.use(function=(req,res,next){
	res.locals.logo="My Web"
	next();
});

app.get("/" function=(req,res){
	var obj={pagename:"index" tittle:"Home"}
	res.render("layout",obj);
});
app.get("/About" function=(req,res){
	var obj={pagename:"About" tittle:"About"}
	res.render("layout",obj);
});
app.get("/Contact" function=(req,res){
	var obj={pagename:"Contact" tittle:"Contact"}
	res.render("layout",obj);
});











app.listen(3030, function(){
	console.log("Server Running")
}
);