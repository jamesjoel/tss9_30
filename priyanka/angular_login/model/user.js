var connect=require("../config/connect");

module.exports.find=function(where,cb){
	connect(function(err,client){
		if(err){
			console.log("Find error query",err);
			return;	}
		var db=client.db("mydb");
		db.collection("user").find(where).toArray(cb);
	});
}