var express=require("express");
var routes=express.Router();
var category = require("../../models/category");
var mongodb = require("mongodb");

routes.get("/add", function(req,res)
{
    var pagedata={title:"Add New Category",pagename:"admin/category/add_category"};
    res.render("admin_layout",pagedata);
});

routes.post("/add",function(req,res)
{
    category.insert(req.body,function(err,result)
    {
        if(err)
        {
            console.log("Connection error", err);
            return;
        }
        res.redirect("/admin/category/add");
    });
});

routes.get("/view", function(req,res)
{
    category.find({},function(err,result)
    {
        if(err)
        {
            console.log("Connection error", err);
            return;
        }
        var pagedata = {title : "View All Category", pagename:"admin/category/view_category", result : result };
        res.render("admin_layout",pagedata);
    });
});

routes.get("/delete/:a", function(req,res)
{
    var id = req.params.a;
    category.delete( {_id : new mongodb.ObjectId(id)}, function(err,result)
    {
        if(err)
        {
            console.log("Deletion error", err);
            return;
        }
        res.redirect("/admin/category/view");
    });
});

routes.get("/edit/:id", function(req,res)
{
    var id = req.params.id;
    category.find({_id : new mongodb.ObjectId(id)},function(err,result){
        if(err)
        {
            console.log("Edition err", err);
            return;
        }
        var pagedata= {title : "Edit Category", pagename:"admin/category/edit_category", result : result[0]};
        res.render("admin_layout",pagedata);
    });
});

routes.post("/edit", function(req,res)
{
    var where = {_id : new mongodb.ObjectId(req.body.id)};
    var obj = {name : req.body.name};
    category.update(where,obj,function(err,result)
    {
        if(err)
        {
            console.log("Edition error", err);
            return;
        }
        res.redirect("/admin/category/view");
    });
});

module.exports=routes;