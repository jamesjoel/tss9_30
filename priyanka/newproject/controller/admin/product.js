var express = require("express");
var routes = express.Router();
routes.get("/", function(req,res)
{
    var pagedata = {title : "View All Product", pagename : "admin/product/view_product"};
    res.render("admin_layout",pagedata);

});
module.exports = routes;