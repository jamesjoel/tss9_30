var connect=require("../config/connect");
var dbname = require("../config/db");

modle.exports.insert= function(obj,cb)
{
	connect(function(err,client)
	{
		if (err){
			console.log ("connection error",err);
			return;
	}
	var db=client.db(dbname);
	db.collection("user").insert(obj,cb);
});

	module.exports.find=function(where,cb);
	{
		connect (function(err,client)
		{
			if(err){
				console.log("connection error",err);
			return;}
}
var db=client.db(dbname);
db.collection("user").find(where).toArray(cb);
});
	}

	module.exports.update=function(where,obj,cb)
	{
		connect function(err,client)
		{
			if(err)
			{
				console.log("Update error",err);
				return;
}
var db=client.db(dbname);
db.collection("user").update(where,{$set:obj},cb);
		});