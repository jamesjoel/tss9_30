var connect = require("../config/connect");
var dbname = require("../config/db");

module.exports.insert = function(obj,cb){
	connect(function(err,client){
		if(err){
			console.log("User Insertion error",err);
		return;	}
		var db = client.db(dbname);
		db.collection("image").insert(obj,cb);
	});
}
module.exports.find = function(where,cb){
	connect(function(err,client){
		if(err){
			console.log("User Finding error",err);
		return;	}
		var db = client.db(dbname);
		db.collection("image").find(where).toArray(cb);
	});
}
module.exports.update = function(where,obj,cb){
	connect(function(err,client){
		if(err){
			console.log("User Updation error",err);
		return;	}
		var db = client.db(dbname);
		db.collection("image").update(where,{$set:obj},cb);
	});
}
module.exports.delete = function(where,cb){
	connect(function(err,client){
		if(err){
			console.log("User Deletion error",err);
		return;	}
		var db = client.db(dbname);
		db.collection("image").remove(where,cb);
	});
}