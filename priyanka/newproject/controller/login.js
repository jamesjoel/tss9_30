var express= require("express");
var routes = express.Router();
var user = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function(req,res)
{
    var pagedata = {pagename:"login/index",title:"Login", message : req.flash("msg")};
    res.render("layout",pagedata);
});

routes.post("/", function(req,res)
{
    var u = req.body.username;
    var p = req.body.password;
    user.find({ username : u} , function(err,result)
    {
        if(err)
        {
            console.log("Query error", err);
        }
        if(result.length > 0)
        {
           // console.log(result);
            if(result[0].password==sha1(p))
            {
                res.redirect("/user");
            }
            else
            {
                req.flash("msg","Password Incorrect");
                res.redirect("/login");
            }
        }
        else
        {
            req.flash("msg", "Username and Password Incorrect");
            res.redirect("/login");
        }
    });
});
module.exports=routes;