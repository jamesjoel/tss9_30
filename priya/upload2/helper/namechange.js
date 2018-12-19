var crypto = require("crypto");
module.exports = function(name){
	var crypto_name = crypto.randomBytes(20).toString('hex');
	var arr = name.split(".");
	var n = arr.length;
	var ext = arr[n-1];
	var new_name = crypto_name + "."+ext;
	return[new_name,ext];
}

