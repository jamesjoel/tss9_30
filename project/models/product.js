var connect = require("../config/connect");
var dbName = require("../config/db");

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db(dbName);
		db.collection("product").insert(obj, cb);
	});
}

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db(dbName);
		db.collection("product").find(where).toArray(cb);
	});	
}