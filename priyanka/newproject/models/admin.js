var connect = require("../config/connect");
var dbname = require("../config/db");

module.exports.find = function(where,cb)
{
    connect(function(err,client)
    {
        if(err)
        {
            console.log("Connection error",err);
        }
        var db = client.db(dbname);
        db.collection("admin").find(where).toArray(cb);

    });
}