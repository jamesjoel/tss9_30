var connect = require("../config/connect");
var dbname = require("../config/db");

module.exports.insert=function(obj,cb){
	connect(function(err,client){
		if(err){
			console.log("Insertion error",err);
			return; }
		var db = client.db(dbname);
		db.collection("newimages").insert(obj,cb);	
	});
};

module.exports.find=function(where,cb){
	connect(function(err,client){
		if(err){
			console.log("Find error",err);
			return; }
		var db = client.db(dbname);
		db.collection("newimages").find(where).toArray(cb);	
	});
};

module.exports.delete=function(where,cb){
	connect(function(err,client){
		if(err){
			console.log("Deletion error",err);
			return; }
		var db = client.db(dbname);
		db.collection("newimages").remove(where,cb);	
	});
};

module.exports.update=function(where,obj,cb){
	connect(function(err,client){
		if(err){
			console.log("Insertion error",err);
			return; }
		var db = client.db(dbname);
		db.collection("newimages").remove(where,{$set:obj},cb);	
	});
};