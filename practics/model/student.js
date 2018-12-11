var connect = require("../config/connect");
module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db("tss9");
		db.collection("student").insert(obj, cb);
	});
}

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db("tss9");
		db.collection("student").find(where).toArray(cb);
	});
}

module.exports.update=function(where, obj, cb){
	connect(function(err, client){
		var db = client.db("tss9");
		db.collection("student").update(where, { $set : obj }, cb);
	});
}

module.exports.delete=function(where, cb){
	connect(function(err, client){
		var db = client.db("tss9");
		db.collection("student").remove(where, cb);
	});
}