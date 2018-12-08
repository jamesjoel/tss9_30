var con = require("../config/connect");

module.exports.find=function(cb){
	con.connect(function(err){
		con.query("SELECT * FROM employee", cb);
	});
}

module.exports.findById=function(id, cb){
	con.connect(function(err){
		con.query("SELECT * FROM employee WHERE id = "+id, cb);
	});
}




module.exports.update=function(id, obj, cb){
	con.connect(function(err){
		con.query("UPDATE employee SET name = '"+obj.name+"', salary = '"+obj.salary+"', city = '"+obj.city+"' WHERE id="+id, cb);
	});
}
module.exports.delete=function(id, cb){
	con.connect(function(err){
		con.query("DELETE FROM employee WHERE id = "+id, cb);
	});
}
module.exports.insert=function(obj, cb){
	con.connect(function(err){
		con.query("INSERT INTO employee (name, salary, city) VALUES ('"+obj.name+"', '"+obj.salary+"', '"+obj.city+"')", cb);
	});
}