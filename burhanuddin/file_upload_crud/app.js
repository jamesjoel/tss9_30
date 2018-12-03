var express = require('express');
var app = express();
var port = 3000;
var routes = require('./config/routes');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var nocache = require("nocache");
var flash = require("express-flash");
var sha1 = require("sha1");
var fileUpload = require("express-fileupload");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "B_@" }));
app.use(nocache());
app.use(flash());
app.use(fileUpload());

app.use(routes);

app.listen(port, function(err) {
    if (err) {
        console.log('Connection Error : ', err);
        return;
    }
    console.log('Surver is running on port : ' + port);
});