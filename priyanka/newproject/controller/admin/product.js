var express = require("express");
var routes = express.Router();
var category = require("../../models/category");
var product = require("../../models/product");

routes.get("/view", function(req,res)
{
    product.find({}, function(err,result){
        if(err)
        {
            console.log("View error",err);
        }
        var pagedata = {title : "View All Product", pagename : "admin/product/view_product", result :result};
        res.render("admin_layout",pagedata);
    });
});

routes.get("/add",function(req,res)
{
    category.find({},function(err,result)
    {
        if(err)
        {
            console.log("Product add Error",err);
        }
        var pagedata = {title :"Add New Product", pagename : "admin/product/add_product", result:result};
        res.render("admin_layout", pagedata);
    });
});

routes.post("/add", function(req,res)
{
    product.insert(req.body,function(err,result)
    {
        if(err)
        {
            console.log("Product Insertion Error", err);
        }
        res.redirect("/admin/product/view");
    });
});
module.exports = routes;