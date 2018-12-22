var express = require("express");
var routes = express.Router();
var user = require("../model/user");
var sha1 = require("sha1");

module.exports=function(io){
    routes.get("/",function(req,res){
        user.find({},function(err,result){
            if(err){
                console.log("Signup error",err);
                return;    }
               res.redirect("/"); 
        });
    });

   
    routes.post("/", function(req, res){
        req.body.password = sha1(req.body.password);
        user.insert(req.body, function(err, result){
        	if(err){
        		console.log("Signup error",err);
		        return;	}
                console.log(req.body);
            req.flash("msgSuccess", "Successful Registration, Please Login to Continue !");
            res.redirect("/");
        });
    });

    return routes;
}
