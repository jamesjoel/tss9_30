var MongoClient=require("mongodb").MongoClient;
var url="mongodb+srv://priyanka:pj30889#@cluster0-piea5.mongodb.net/test?retryWrites=true";
var client=new MongoClient(url,{useNewUrlParser:true});
module.exports=function(cb){
	client.connect(cb);
}
