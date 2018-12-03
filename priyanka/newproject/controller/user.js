var express= require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo = require("mongodb");
var namechange = require("../helpers/namechange");
var path = require("path");
var sha1 = require("sha1");

routes.get("/",function(req,res)
{
    var id= req.session._id;
    user.find({_id : new mongo.ObjectId(id)}, function(err,result)
    {
        if(err)
        {
            console.log("Finding Error", err);
            return;
        }
        var pagedata = {title : "Dashboard", pagename : "user/index", result : result[0], message : req.flash("msg")};
        res.render("layout", pagedata);
    });
});

routes.get("/changeimg", function(req,res)
{
    var pagedata= {title :"Change Image", pagename : "user/changeimg"};
    res.render("layout", pagedata);
});

routes.post("/changeimg", function(req,res)
{
    var arr = namechange(req.files.image.name);
    var name = arr[0];
    var id = req.session._id;
    var upload_path = path.resolve();
    req.files.image.mv(upload_path+"/public/user/"+name, function(err)
    {
        if(err)
        {
            console.log("Uploading image error", err);
            return;
        }
        user.update({_id : new mongo.ObjectId(id)}, {image : name},function(err,result)
        {
            if(err)
            {
                console.log("Image updation error", err);
                return;
            }
            res.redirect("/user");
        });
    });
});

routes.get("/changepass", function(req,res)
{
    var pagedata = {title :"Change Password", pagename : "user/changepass", message : req.flash("msg")};
    res.render("layout", pagedata);
});

routes.post("/changepass", function(req,res)
{
    var a = req.body.c_pass;
    var b = req.body.n_pass;
    var c = req.body.cn_pass;
    var id= req.session._id;
    user.find({ _id : new mongo.ObjectId(id)}, function(err,result){
        if(err)
        {
            console.log("Changing password error", err);
            return;
        }
        if(result[0].password==sha1(a))
        {
            if(b==c)
            {
                user.update({_id : new mongo.ObjectId(id)}, {password : sha1(b)} ,function(err,result)
                {
                    if(err)
                    {
                        console.log("new and confirmation new password incorrect", err);
                        return;
                    }
                    req.flash("msg", "Your Password changed successfully");
                    res.redirect("/user");
                });
            }
               else
            {
                req.flash("msg","The new and confirmation password incorrect");
                res.redirect("/user/changepass");
            }
            
        }
        else
        {
            req.flash("msg","The current password incorrect");
                res.redirect("/user/changepass");
        }
    });
});

routes.get("/edit/:id", function(req,res)
{
    user.find({_id : new mongo.ObjectId(req.params.id)}, function(err,result)
    {
        if(err)
        {
            console.log("Editing profile error",err);
            return;
        }
        var pagedata = {title:"Edit Profile Page", pagename : "user/edit_profile",result:result[0]};
        res.render("layout",pagedata);
    });
});

routes.post("/edit",function(req,res)
{   
    //console.log(req.body);
    var where = { _id : new mongo.ObjectId(req.body.id)};
    delete req.body.id;
    //console.log(req.body);
    user.update(where, req.body , function(err,result)
    {
        if(err)
        {
            console.log("Profile Updation error", err);
            return;
        } 
            res.redirect("/user");

        
    });
});


module.exports = routes;