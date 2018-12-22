var express = require("express");
var routes = express.Router();
 routes.get("/", function(req,res)
 {
    var pagedata = {title:"Dashboard", pagename : "admin/dash"};
    res.render("admin_layout",pagedata);
 });
 module.exports=routes;