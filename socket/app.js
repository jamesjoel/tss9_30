var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);


app.get("/", function(req, res){

	res.sendFile(__dirname+"/index.html");
});
 
io.on("connection", function(socket){
	// console.log("page call-----", socket.id);
	socket.on("sending", function(data){

		socket.broadcast.emit("send_to_server", data);
	});

	socket.on("disconnect", function(){
		console.log("a user dissconnect");
	}); 
});





http.listen(3000, function(){
	console.log("Server Running");
});