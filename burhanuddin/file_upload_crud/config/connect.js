var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

module.exports = function(callback) {
    MongoClient.connect(url, {useNewUrlParser: true }, callback);
}
