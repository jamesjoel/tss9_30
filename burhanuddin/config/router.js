const express = require("express");
const routes = express.Router();

module.exports = function() {
  routes.get("/", require("../controllers/home")());
  return routes;
};
