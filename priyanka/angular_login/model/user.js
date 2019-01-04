var connect=require("../config/connect");
var dbname=require("../config/db");
module.exports.find=function(where,cb){
	connect(function(err,client){
		if(err){
			console.log("Find error query",err);
			return;	}
		var db=client.db(dbname);
		db.collection("user").find(where).toArray(cb);
	});
}