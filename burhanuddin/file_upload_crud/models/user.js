var connect = require('../config/connect');
var dbName = require('../config/db');

module.exports.find = function(where, callback) {
    connect(function(err, client) {
        if(err) {
            console.log(err);
            return;
        }
        var db = client.db(dbName);
        db.collection('user').find(where).toArray(callback);
    });
};

module.exports.insert = function(obj, callback) {
    connect(function(err, client) {
        if(err) {
            console.log(err);
            return;
        }
        var db = client.db(dbName);
        db.collection('user').insert(obj, callback);
    });
};

module.exports.delete = function(where, callback) {
    connect(function(err, client) {
        if(err) {
            console.log(err);
            return;
        }
        var db = client.db(dbName);
        db.collection('user').remove(where, callback);
    });
};

module.exports.update = function(where, obj, callback) {
    connect(function(err, client) {
        if(err) {
            console.log(err);
            return;
        }
        var db = client.db(dbName);
        db.collection('user').update(where, { $set : obj }, callback);
    });
}