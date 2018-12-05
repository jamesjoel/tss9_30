var connect = require('../config/connect');
var dbDetails = require('../config/db');

module.exports.find = function(where, callback) {
    connect(function(err, client) {
        if(err) {
            console.log(err);
            return;
        }
        var db = client.db(dbDetails.dbName);
        db.collection(dbDetails.userCollection).find(where).toArray(callback);
    });
};

module.exports.insert = function(obj, callback) {
    connect(function(err, client) {
        if(err) {
            console.log(err);
            return;
        }
        var db = client.db(dbDetails.dbName);
        db.collection(dbDetails.userCollection).insert(obj, callback);
    });
};

module.exports.delete = function(where, callback) {
    connect(function(err, client) {
        if(err) {
            console.log(err);
            return;
        }
        var db = client.db(dbDetails.dbName);
        db.collection(dbDetails.userCollection).remove(where, callback);
    });
};

module.exports.update = function(where, obj, callback) {
    connect(function(err, client) {
        if(err) {
            console.log(err);
            return;
        }
        var db = client.db(dbDetails.dbName);
        db.collection(dbDetails.userCollection).update(where, { $set : obj }, callback);
    });
}