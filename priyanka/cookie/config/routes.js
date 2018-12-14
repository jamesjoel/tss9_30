var express=require("express");
var routes= express.Router();

routes.use("/", require("../controller/home"));
routes.use("/view_cookie",require("../controller/view_cookie"));

module.exports = routes;