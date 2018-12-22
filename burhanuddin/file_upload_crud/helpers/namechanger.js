var crypto = require('crypto');
module.exports = function(name) {
    var crypt_name = crypto.randomBytes(20).toString('hex');
	var arr = name.split(".");
	var arrLenght = arr.length;
	var ext = arr[arrLenght - 1];
	var new_name = crypt_name + "." + ext;
	return [new_name, ext];
}