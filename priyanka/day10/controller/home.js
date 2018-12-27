var express = require("express");
var routes = express.Router();
routes.get("/", function(req,res)
{
    var pagedata = {pagename:"home",title:"Home"};
    res.render("layout",pagedata);
});

module.exports=routes;