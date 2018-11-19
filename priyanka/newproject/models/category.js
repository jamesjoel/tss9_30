var connect = require("../config/connect");
var dbname = require("../config/db");


module.exports.insert= function(obj,cb)
{
    connect(function(err,client)
    {
        if(err)
        {
            console.log("Insertion error", err);
        }
        var db = client.db(dbname);
        db.collection("category").insert(obj,cb);
    });
}

module.exports.find = function(where,cb)
{
    connect(function(err,client)
    {
        if(err)
        {
            console.log("Connection Error", err);
        }
        var db= client.db(dbname);
        db.collection("category").find(where).toArray(cb);
    });
}