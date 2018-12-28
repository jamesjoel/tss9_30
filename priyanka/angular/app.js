var express=require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser=require("body-parser");
var mongo=require("mongodb");

app.set("view engine","ejs");
app.use(bodyParser());
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("index");
});

app.get("/getall",function(req,res){
	MongoClient.connect("mongodb://localhost:27017",function(err,client){
		var db=client.db("test");
		db.collection("student").find().toArray(function(err,result){
			res.send(result);
		});
	});
});

app.post("/",function(req,res){
	MongoClient.connect("mongodb://localhost:27017",function(err,client){
		var db=client.db("test");
		db.collection("student").insert(req.body,function(err,result){
			res.send(result.ops[0]);
		});
	});
});
app.post("/delete",function(req,res){
	MongoClient.connect("mongodb://localhost:27017",function(err,client){
		var db=client.db("test");
		db.collection("student").remove({_id:new mongo.ObjectId(req.body._id)},function(err,result){
			// console.log(result);
			res.send(result);
		});
	});
});

// app.get("/demo",function(req,res){
// 	MongoClient.connect("mongodb://localhost:27017",function(err,client){
// 		var db=client.db("tss9");
// 		db.collection("product").find().toArray(function(err,result){
// 			res.send(result);
// 		});
// 	});
// });

app.listen(3000, function(err){
	if(err){
		console.log("Server error",err);
		return;	}
		console.log("server running");
});

