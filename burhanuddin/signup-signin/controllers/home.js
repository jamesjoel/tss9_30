var express = require('express');
var routes = express.Router();
var user = require('../models/user');
var mongodb = require('mongodb');

var emptyCookieValue = '';

routes.get('/', function(req, res) {
	if(req.cookies.getUserName == undefined || req.cookies.getUserEmail == undefined) {
		var getUserName = res.cookie("getUserName", emptyCookieValue, { expire : new Date(Date.now()+3600000), httpOnly : true});
		var getUserEmail = res.cookie("getUserEmail", emptyCookieValue, { expire : new Date(Date.now()+3600000), httpOnly : true});
		var cookieObj = {
			uname : req.cookies.getUserName,
			uemail : req.cookies.getUserEmail
		}
		var pageData = { title : "Home" , pageName : 'home/index', usernameErrorMsg : req.flash("usernameErrorMsg"), emailErrorMsg : req.flash("emailErrorMsg"), cookieObj : cookieObj };
		res.render('layout', pageData);
	} else if (req.cookies.getUserName || req.cookies.getUserEmail) {
		var cookieObj = {
			uname : req.cookies.getUserName,
			uemail : req.cookies.getUserEmail
		}
		var pageData = { title : "Home" , pageName : 'home/index', usernameErrorMsg : req.flash("usernameErrorMsg"), emailErrorMsg : req.flash("emailErrorMsg"), cookieObj : cookieObj};
		res.render('layout', pageData);
	} else {
		var pageData = { title : "Home" , pageName : 'home/index', usernameErrorMsg : req.flash("usernameErrorMsg"), emailErrorMsg : req.flash("emailErrorMsg") };
		res.render('layout', pageData);	
	}
	// var pageData = { title : "Sign Up" , pageName : 'home/index', usernameErrorMsg : req.flash("usernameErrorMsg"), emailErrorMsg : req.flash("emailErrorMsg")};
    // res.render('layout', pageData);
});

// Find
routes.get('/user-lists', function(req, res) {
	user.find({}, function(err, result) {
		if(err) {
			console.log(err);
			return;
		} else {
			var pageData = { title : "Home" , pageName : 'home/user-lists' , result : result };
			res.render('layout', pageData);	
		}
	});
});


// Insert
var checkUsername = '';
var checkEmail = '';

routes.post('/', function(req, res) {
	var checkUsername = req.body.username;
	var checkEmail = req.body.email;
	var getUserName = res.cookie("getUserName", checkUsername, { expire : new Date(Date.now()+3600000), httpOnly : true});
	var getUserEmail = res.cookie("getUserEmail", checkEmail, { expire : new Date(Date.now()+3600000), httpOnly : true});
	user.find( { $or : [{ username : checkUsername }, { email : checkEmail}] }, function(err, result) {
		if(err) {
			console.log(err);
			return;
		} else {
			if(result.length > 0) {
				if(result[0].username === checkUsername) {
					req.flash("usernameErrorMsg", "User Name is already exists");
					res.redirect('/');
					return;
				} else {
					req.flash("emailErrorMsg", "Email is already exists");
					res.redirect('/');
					return;
				}
			} else {
				user.insert(req.body, function(err, result) {
					if(err) {
						console.log(err);
						return;
					} else {
						console.log('Sign Up Sucsessful');
						res.clearCookie("getUserName");
						res.clearCookie("getUserEmail");						
						res.redirect('/');
					}
				});
			}
		}
	});
});


// Delete
routes.get('/delete/:id', function(req, res) {
	user.delete({ _id : new mongodb.ObjectId(req.params.id)}, function(err, result) {
		if(err) {
			console.log(err);
			return;
		} else {
			console.log('deleted');
			res.redirect('/user-lists');
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
	delete req.body.id;
	user.update(where, req.body, function(err, result) {
		if(err) {
			console.log(err);
			return;
		} else {
			res.redirect('/user-lists');
		}
	});
});

module.exports = routes;