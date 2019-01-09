var MongoClient = require("mongodb").MongoClient;
var url ="mongodb://james:123abc@cluster0-shard-00-00-1wdmw.mongodb.net:27017,cluster0-shard-00-01-1wdmw.mongodb.net:27017,cluster0-shard-00-02-1wdmw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var client = new MongoClient(url, { useNewUrlParser: true });

module.exports=function(cb){
	client.connect(cb);
}
