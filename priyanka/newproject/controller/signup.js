var express= require("express");
var routes = express.Router();

routes.get("/", function(req,res)
{
    var pagedata = {pagename:"signup/index",title:"Signup"};
    res.render("layout",pagedata);
});

routes.post("/", function(req,res)
{
    console.log(req.body);
});
module.exports=routes;