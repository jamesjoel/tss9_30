var MongoClient=require("mongodb").MongoClient;
var url="mongodb://priyanka:pj03@cluster0-shard-00-00-piea5.mongodb.net:27017,cluster0-shard-00-01-piea5.mongodb.net:27017,cluster0-shard-00-02-piea5.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
var client=new MongoClient(url,{useNewUrlParser:true});
module.exports=function(cb){
	client.connect(cb);
}
