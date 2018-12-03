var express = require('express');
var routes = express.Router();
var user = require('../models/user');
var mongodb = require('mongodb');
var nameChanger = require("../helpers/namechanger");
var path = require("path");
var fs = require('fs');

routes.get('/', function(req, res) {
	var pageData = { title : "Sign Up" , pageName : 'home/index', usernameErrorMsg : req.flash("usernameErrorMsg"), emailErrorMsg : req.flash("emailErrorMsg")};
    res.render('layout', pageData);
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
routes.post('/', function(req, res) {
	console.log(req.body);
	/*
	user.insert(req.body, function(err, result) {
		if(err) {
			console.log('getting error');
			console.log(err);
			return;
		} else {
			console.log('Sign Up Sucsessful');
			res.redirect('/');
		}
	});
	*/

	var checkUsername = req.body.username;
	var checkEmail = req.body.email;
	
	user.find( { $or : [{ username : checkUsername }, { email : checkEmail}] }, function(err, result) {
		// console.log(username);
		if(err) {
			console.log(err);
			return;
		} else if (result[0].username === checkUsername) {
			req.flash("usernameErrorMsg", "User Name is already exists");
			res.redirect('/');
			return;
		} else if (result[0].email === checkEmail) {
			req.flash("emailErrorMsg", "Email is already exists");
			res.redirect('/');
			return;
		} else {
			user.insert(req.body, function(err, result) {
				if(err) {
					console.log('getting error');
					console.log(err);
					return;
				} else {
					console.log('Sign Up Sucsessful');
					res.redirect('/');
				}
			});
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
			res.redirect('/');
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
			res.redirect('/');
		}
	});
});

module.exports = routes;