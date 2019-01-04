var express = require("express");
var routes = express.Router();
var user = require("../model/user");

routes.post("/checkusername", function(req, res){
	user.find({ username : req.body.username }, { password : 0 }, function(err, result){
		console.log(result);
		console.log(result.length);
		res.send(String(result.length));
	});
});

module.exports=routes;