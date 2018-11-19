var express=require("express");
var routes=express.Router();
var category = require("../../models/category");

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
module.exports=routes;