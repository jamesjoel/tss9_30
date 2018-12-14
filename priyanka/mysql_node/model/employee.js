var con = require("../config/connect");
module.exports.find=function(cb){
	con.connect(function(err){
		if(err){
			console.log("Find error",err);
			return;	}
		con.query("SELECT * FROM employee",cb);	
	});
}
module.exports.find=function(cb){
	con.connect(function(err){
		if(err){
			console.log("Find error",err);
			return;	}
		con.query("SELECT * FROM employee",cb);	
	});
}
module.exports.update=function(cb){
	con.connect(function(err){
		if(err){
			console.log("Updation error",err);
			return;	}
		con.query("UPDATE employee Set name = '"+obj.name+"', salary='"+obj.salary+"',city='"+obj.city+"',WHERE id="+id,cb);	
	});
}
module.exports.delete=function(cb){
	con.connect(function(err){
		if(err){
			console.log("Deletion error",err);
			return;	}
		con.query("DELETE FROM employee WHERE id="+id ,cb);	
	});
}
module.exports.insert=function(cb){
	con.connect(function(err){
		if(err){
			console.log("Insertion error",err);
			return;	}
		con.query("INSERT INTO employee (name,salary,city) VALUES('"+obj.name+"', '"+obj.salary+"','"+obj.city+"')" ,cb);	
	});
}
module.exports.findbyid=function(cb){
	con.connect(function(err){
		if(err){
			console.log("Finding by id error",err);
			return;	}
		con.query("SELECT * FROM employee WHERE id="+id ,cb);	
	});
}
