var connect = require("../config/connect");
var dbname = require("../config/db");

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		if(err){
			console.log("Connection Error", err);
			return;
		}
		var db = client.db(dbname);
		db.collection("user").insert(obj, cb);
	});
}

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db(dbname);
		db.collection("user").find(where).toArray(cb);
	});
}