var express= require("express");
var app=express();
app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res)
{
    var a="Priyanka";
    var b="Jain";
    var arr=["red","green","yellow","black"];
    var user=[
            {
                name:"rohit",
                age:25,
                city:"Indore"
            },
            {
                name:"james",
                age:26,
                city:"Bhopal"
            },
            {
                name:"priya",
                age:27,
                city:"indore"
            }
            ];  
    var obj={f_name:a , l_name:b, arr:arr, user:user};
    
    res.render("index",obj);
});

app.listen(4000,function(){
    console.log("Server Running");
});
