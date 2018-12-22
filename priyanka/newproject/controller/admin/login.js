var express = require("express");
var routes =express.Router();
var admin = require ("../../models/admin");
var sha1 = require("sha1");
      
routes.get("/", function (req,res)
    {
        var pagedata = {title:"Login", pagename:"admin/login", message : req.flash("msg")};
        res.render("admin_layout",pagedata);
    });
routes.post("/", function(req,res)
{
    //console.log(req.body);
    var u = req.body.username;
    var p = req.body.password;
    //console.log(sha1(p));
    admin.find({username:u}, function(err,result)
    {
        if(err)
        {
            console.log("can not find",err);
        }
    if(result.length>0)
    {
        if(result[0].password==p)
        {
            req.session.is_admin_logged_in = true;
            res.redirect("/admin/dashboard");
        }
        else
        {
            req.flash("msg", "Password Incorrect");
            res.redirect("/admin");
        }
    }    
        else
        {
            req.flash("msg", "Username and Password Incorrect");
            res.redirect("/admin");
          }
});
});
module.exports=routes;