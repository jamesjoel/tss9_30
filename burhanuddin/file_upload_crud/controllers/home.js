var express = require('express');
var routes = express.Router();
var user = require('../models/user');
var mongodb = require('mongodb');
var nameChanger = require("../helpers/namechanger");
var path = require("path");
var fs = require('fs');


// Find
routes.get('/', function(req, res) {
	user.find({}, function(err, result) {
		if(err) {
			console.log(err);
			return;
		} else {
			var pageData = { title : "Home" , pageName : 'home/index' , result : result , errorMessage : req.flash("errorMessage")};
    		res.render('layout', pageData);
		}
	});
});


// Insert

routes.post('/', function(req, res) {
	console.log(res.body);
	/*
	user.insert(req.body, function(err, result) {
		if(err) {
			console.log(err);
			return;
		} else {
			res.redirect('/');
		}
	});
	*/
	console.log(req.files.photo.name);
	if (!req.files.photo.name == undefined) {
		console.log('if');
		user.insert(req.body, function(err, result) {
			if(err) {
				console.log(err);
				return;
			} else {
				res.redirect('/');
			}
		});	
	} else {
		console.log('else');
		var arr = nameChanger(req.files.photo.name);
		console.log(arr);
		var name = arr[0];
		var ext = arr[1];
		var dir = path.resolve();
		if(ext == "jpg" || ext == "jpeg" || ext == "png" || ext =="gif") {
			req.files.photo.mv(dir + "/public/images/" + name , function(err) {
				if(err) {
					console.log(err);
					return;
				} else {
					req.body.photo = name;
					user.insert(req.body, function(err, result) {
						if(err) {
							console.log(err);
							return;
						} else {
							res.redirect('/');
						}
					});
				}
			});
		} else {
			req.flash("errorMessage", "This File Type Not Allowed");
			res.redirect('/');
		}
	}
});

/*
routes.post('/', function(req, res) {
	var arr = nameChanger(req.files.photo.name);
	var name = arr[0];
	var ext = arr[1];
	var dir = path.resolve();
	if(ext == "jpg" || ext == "jpeg" || ext == "png" || ext =="gif") {
		req.files.photo.mv(dir + "/public/images/" + name , function(err) {
			if(err) {
				console.log(err);
				return;
			} else {
				req.body.photo = name;
				user.insert(req.body, function(err, result) {
					if(err) {
						console.log(err);
						return;
					} else {
						res.redirect('/');
					}
				});
			}
		});
	} else {
		req.flash("errorMessage", "This File Type Not Allowed");
		res.redirect('/');
	}
});
*/

// Delete
routes.get('/delete/:id', function(req, res) {
	user.find({ _id : new mongodb.ObjectId(req.params.id) }, function(err, result) {
		if(err) {
			console.log(err);
			return;
		} else {
			var imgName = result[0].photo;
			var dir = path.resolve();
			fs.unlink(dir + "/public/images/" + imgName, function(err) {
				if (err) {
					console.log(err);
					return;
				}
				console.log('File deleted!');
			});
			user.delete({ _id : new mongodb.ObjectId(req.params.id) }, function(err, result) {
				if(err) {
					console.log(err);
					return;
				} else {
					console.log('deleted');
					res.redirect('/');
				}
			});
		}
	});
});


// Edit
routes.get('/edit/:id', function(req, res) {
	user.find({ _id : new mongodb.ObjectId(req.params.id) }, function(err, result) {
		if(err) {
			console.log(err);
			return;
		} else {
			var pageData = { title : "Edit User Details" , pageName : 'home/edit' , result : result[0] };
    		res.render('layout', pageData);
		}
	});
});


// Update
routes.post('/edit', function(req, res) {
	var where = { _id : new mongodb.ObjectId(req.body.id) };
	var oldPhoto = req.body.oldPhoto;
	delete req.body.id;
	delete req.body.oldPhoto;
	var arr = nameChanger(req.files.photo.name);
	var name = arr[0];
	var ext = arr[1];
	var dir = path.resolve();
	fs.unlink(dir + "/public/images/" + oldPhoto, function(err) {
		if (err) {
			console.log("Getting Error When deleting File"+ err);
		} else {
			console.log('File deleted!');
		}
  	});
	if(ext == "jpg" || ext == "jpeg" || ext == "png" || ext =="gif") {
		req.files.photo.mv(dir + "/public/images/" + name , function(err) {
			if(err) {
				console.log(err);
				return;
			} else {
				req.body.photo = name;
				user.update(where, req.body, function(err, result) {
					if(err) {
						console.log(err);
						return;
					} else {
						res.redirect('/');
					}
				});
			}
		});
	} else {
		req.flash("errorMessage", "This File Type Not Allowed");
		res.redirect('/');
	}
});

module.exports = routes;