var express = require("express");
var routes = express.Router();
var user = require("../model/user");

routes.post("/checkusername", function(req, res){
	user.find({ username : req.body.username }, function(err, result){
		console.log(result);
		if(result.length)
		{
			res.send([String(result.length), { name : result[0].name, username : result[0].username}]);

		}
		else
		{
			res.send([String(result.length), {}]);
			
		}
	});
});
routes.post("/checkpassword", function(req, res){
	user.find({ username : req.body.username, password : req.body.password }, function(err, result){
		if(result.length<=0)
		{
			res.send("0");
		}
		else
		{
			req.session._id = result[0]._id;			
			req.session.name = result[0].name;			
			req.session.username = result[0].username;			
			req.session.is_user_logged_in = true;			
			res.send("1");
		}
		
		
	});
});



module.exports=routes;