var express = require('express');
var routes = express.Router();

routes.use('/', require('../controllers/home'));

module.exports = routes;