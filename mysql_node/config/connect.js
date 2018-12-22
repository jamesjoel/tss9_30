var mysql = require("mysql");
module.exports = mysql.createConnection({
	host : "localhost",
	user : "admin", // root
	password : "admin", // ""
	database : "tss9"
});


