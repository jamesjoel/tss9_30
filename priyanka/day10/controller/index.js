var express = require("express");
var routes = express.Router();
routes.get("/", function(req,res)
{
    var pagedata = {pagename:"index",title:"Home"};
    res.render("layout",pagedata);
});

module.exports=routes;