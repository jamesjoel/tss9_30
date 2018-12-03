var express = require("express");
var app = express();

app.set("view engine" , "ejs");

app.get("/", function(req,res){
    MongoClient.connect(url , function(err,client)
    {
        if(err)
        {
            console.log("connection error",err);
            return;
        }
        var db= client.db("tss");
        db.collection("user").find().toArray function(err,result)
        {
            if(err)
            {
                console.log("Query Error",err);
                return;
            }
            console.log(result);
            res.render("index", {arr:result});
        });
    });
});

app.listen("3000", function(error)
{
    if(error)
    {
        console.log("Connection error: error");
    }
    console.log("Server Running");
});