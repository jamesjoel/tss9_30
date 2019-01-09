var con = require("../config/connect");

module.exports.find=function(where, cb){
	con(function(err, client){
		var db = client.db("mydb");
		db.collection("user").find(where).toArray(cb);
	});
}