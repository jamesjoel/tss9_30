var express = require("express");
var routes = express.Router();
routes.get("/", function(req,res)
{
    var pagedata= {pagename:"contact", title:"Contact"};
    res.render("layout",pagedata);
});
module.exports=routes;