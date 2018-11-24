var express = require("express");
var routes = express.Router();
var category = require("../../models/category");
var product = require("../../models/product");
var mongodb = require("mongodb");

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

routes.get("/delete/:id",function(req,res)
{
    product.delete({ _id : new mongodb.ObjectId(req.params.id)},function(err,result){
        if(err)
        {
            console.log("Deletion Error",err);
            return;
        }
        res.redirect("/admin/product/view");
    });
});

routes.get("/edit/:id", function(req,res)
{
    product.find({ _id : new mongodb.ObjectId(req.params.id)},function(err,result1){
        if(err)
        {
            console.log("Product Updation error", err);
            return;
        }
        category.find({}, function(err,result2)
        {
            if(err)
            {
                console.log("Product updation error", err);
                return;
            }
            var pagedata={title:"Edit Product",pagename:"admin/product/edit_product",result1 : result1[0] , result2 : result2};
            res.render("admin_layout",pagedata);
        });
    });
});

routes.post("/edit", function(req,res){
    var where = ({_id : new mongodb.ObjectId(req.body.id)});
    delete req.body.id;
    product.update(where, req.body, function(err,result){
        if(err)
        {
            console.log("Updation Error", err);
            return;
        }
        res.redirect("/admin/product/view");
    });
});
module.exports = routes;