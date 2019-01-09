var express= require("express");
var routes = express.Router();
var session = require("express-session");

routes.get("/", function(req,res)
{
    req.session.destroy();
    res.redirect("/");
});

module.exports = routes;