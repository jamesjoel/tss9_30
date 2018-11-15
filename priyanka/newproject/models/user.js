var connect = require ("../config/connect");
var dbname = require("../config/db");

module.exports.insert= function(obj,cb)
{
    connect(function(err,client){
        if(err)
        {
            console.log("connection error",err);
            return;
        }
        var db = client.db(dbname);
        db.collection("user").insert(obj,cb);
    });
}