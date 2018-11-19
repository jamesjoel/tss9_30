var express = require("express");
var routes = express.Router();

routes.get("/view", function(req, res){
	var pagedata = { title : "View All Product", pagename : "admin/view_product", message : req.flash("msg")};
	res.render("admin_layout", pagedata);
});


module.exports=routes;