var connect = require("../config/connect");
var dbName = require("../config/db");
module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db(dbName);
		db.collection("admin").find(where).toArray(cb);
	});
}

