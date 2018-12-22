var connect = require("../config/connect");
var dbName = require("../config/db");

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db(dbName);
		db.collection("product").insert(obj, cb);
	});
}

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db(dbName);
		db.collection("product").find(where).toArray(cb);
	});	
}
module.exports.delete=function(where, cb){
	connect(function(err, client){
		var db = client.db(dbName);
		db.collection("product").remove(where, cb);
	});
}
module.exports.update=function(where, obj, cb){
	connect(function(err, client){
		var db = client.db(dbName);
		db.collection("product").update(where, { $set : obj}, cb);
	});	
}
module.exports.findProductCate=function(cb){
    connect(function(err,client)
    {
        if(err)
        {
            console.log("connection error", err);
        }
        var db = client.db(dbName);
        db.collection("product").aggregate([
            {
                $addFields : { demo : { $toObjectId : "$category"}}
            },
            {
                $lookup : {
                    from : "category",
                    localField : "demo",
                    foreignField : "_id",
                    as : "cate_data"
                }
            }
        ]).toArray(cb);
    });
}