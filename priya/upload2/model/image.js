var connect=require("../config/connect");
var dbname=require("../config/db");

module.exports.insert=function(obj,cb){
	connect(function(err,client){
		if (err){
			console.log("Add error",err);
			return;
		}
		var db=client.db(dbname);
		db.collection("image").insert(obj,cb);
	});
};

module.exports.find=function(where,cb){
	connect(function(err,client){
		if (err){
			console.log("Find error",err);
			return;
		}
		var db=client.db(dbname);
		db.collection("image").find(where).toArray(cb);
		});
	}
	module.exports.delete=function(where,cb){
	connect(function(err,client){
		if (err){
			console.log("Find error",err);
			return;
		}
		var db=client.db(dbname);
		db.collection("image").remove(where,cb);
		});
	}
