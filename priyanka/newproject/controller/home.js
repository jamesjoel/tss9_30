var express= require("express");
var routes = express.Router();
var product = require("../models/product");

routes.get("/", function(req,res)
{
    product.find({}, function(err,result){
        if(err)
        {
            console.log("Display error", err);
            return;
        }
    var pagedata = {pagename:"home/index",title:"Home", product :result};
    res.render("layout",pagedata);
    });
});

module.exports=routes;