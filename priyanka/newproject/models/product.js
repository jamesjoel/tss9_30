var connect = require("../config/connect");
var dbname = require("../config/db");

module.exports.insert = function(obj,cb)
{
    connect(function(err,client)
    {
        if(err)
        {
            console.log("connection error",err);
        }
        var db = client.db(dbname);
        db.collection("product").insert(obj,cb);
    });
}

module.exports.find = function(where,cb)
{
    connect(function(err,client)
    {
        if(err)
        {
            console.log("connection error", err);
        }
        var db = client.db(dbname);
        db.collection("product").find(where).toArray(cb);
    });
}

module.exports.delete = function(where,cb)
{
    connect(function(err,client){
        if(err)
        {
            console.log("Deletion error", err);
            return;
        }
        var db= client.db(dbname);
        db.collection("product").remove(where,cb);
    });
}

module.exports.update = function(where,obj,cb)
{
    connect(function(err,client)
    {
        if(err)
        {
            console.log("Updation error", err);
            return;
        }
        var db = client.db(dbname);
        db.collection("product").update(where,{$set : obj}, cb);
    });
}