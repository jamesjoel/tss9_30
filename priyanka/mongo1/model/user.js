var connect = require("../config/connect");

module.exports.find = function(cb)
{
    connect(function(err,client)
    {
        var db = client.db("tss9");
        db.collection("user").find().toArray(cb);
    });
}

module.exports.insert=function(cb)
{
    connect(function(err,client){
        var db= client.db("tss9");
        db.collection("user").insert(cb);
    });
}