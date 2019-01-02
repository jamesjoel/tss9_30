const connect = require("../config/connect");
const dbDetails = require("../config/db");

module.exports.find = function(where, callback) {
  connect(function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    var db = client.db(dbDetails.dbName);
    db.collection(dbDetails.employee)
      .find(where)
      .toArray(callback);
  });
};

module.exports.insert = function(obj, callback) {
  connect(function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    var db = client.db(dbDetails.dbName);
    db.collection(dbDetails.employee).insert(obj, callback);
  });
};

module.exports.delete = function(where, callback) {
  connect(function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    var db = client.db(dbDetails.dbName);
    db.collection(dbDetails.employee).remove(where, callback);
  });
};

module.exports.update = function(where, obj, callback) {
  connect(function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    var db = client.db(dbDetails.dbName);
    db.collection(dbDetails.employee).update(where, { $set: obj }, callback);
  });
};
