var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var mongo = require("mongodb");



// var url = "mongodb://james:123james@cluster0-shard-00-00-1wdmw.mongodb.net:27017,cluster0-shard-00-01-1wdmw.mongodb.net:27017,cluster0-shard-00-02-1wdmw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
// const client = new MongoClient(url, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("mydb").collection("stu");
//  // perform actions on the collection object
//   client.close();
//   collection.find().toArray(function(err, result){
//   	console.log(result);
//   })
// });


// MongoClient.connect(url, function(err, client){
// 	if(err){
// 		console.log("ERROR", err);
// 		return;
// 	}

// });



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

app.get("/", function(req, res){
	res.render("index");
});

app.get("/getall", function(req, res){
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
			var db = client.db("tss9");
			db.collection("student").find().toArray(function(err, result){
				res.send(result);
			});
		});
});






app.post("/", function(req, res){
	
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
		var db = client.db("tss9");
		db.collection("student").insert(req.body, function(err, result){
			res.send(result.ops[0]);
			// console.log(result);
		});
	});


});

app.post("/delete", function(req, res){
	console.log(req.body);
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
			var db = client.db("tss9");
			db.collection("student").remove({_id : new mongo.ObjectId(req.body._id)}, function(err, result){
				res.send(result);
			});
		});

});	

app.post("/edit", function(req, res){
	var id = new mongo.ObjectId(req.body._id);
	//console.log(req.body);
	delete req.body._id;
	MongoClient.connect("mongodb://localhost:27017", function(err, client){
			var db = client.db("tss9");
			db.collection("student").update({_id : id}, { $set : req.body }, function(err, result){
				console.log("--------------",result);
				res.send(result);
			});
		});
});




app.listen(3000, function(){
	console.log("Server Running");
});