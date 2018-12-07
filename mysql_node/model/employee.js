var con = require("../config/connect");

module.exports.find=function(cb){
	con.connect(function(err){
		con.query("SELECT * FROM employee", cb);
	});
}
module.exports.update=function(cb){
	con.connect(function(err){
		con.query("SELECT * FROM employee", cb);
	});
}
module.exports.delete=function(cb){
	con.connect(function(err){
		con.query("SELECT * FROM employee", cb);
	});
}
module.exports.insert=function(cb){
	con.connect(function(err){
		con.query("SELECT * FROM employee", cb);
	});
}