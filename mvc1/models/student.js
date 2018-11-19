var connect = require("../config/connect");

module.exports.find=function(cb){
	connect(function(err, client){
		var db = client.db("tss5");
		db.collection("student").find().toArray(cb);
	});
	
}

