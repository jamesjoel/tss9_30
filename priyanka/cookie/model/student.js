var connect = require("../config/connect");
var dbname = require("../config/db");

module.exports.insert=function(obj,cb){
	connect(function(err,client){
		if(err){
			console.log("Insertion error",err);
			return; }
		var db = client.db(dbname);
		db.collection("student").insert(obj,cb);	
	});
};

module.exports.find=function(where,cb){
	connect(function(err,client){
		if(err){
			console.log("Find error",err);
			return; }
		var db = client.db(dbname);
		db.collection("student").find(where).toArray(cb);	
	});
};

module.exports.delete=function(where,cb){
	connect(function(err,client){
		if(err){
			console.log("Deletion error",err);
			return; }
		var db = client.db(dbname);
		db.collection("student").remove(where,cb);	
	});
};

module.exports.update=function(where,obj,cb){
	connect(function(err,client){
		if(err){
			console.log("Insertion error",err);
			return; }
		var db = client.db(dbname);
		db.collection("student").update(where,{$set:obj},cb);	
	});
};