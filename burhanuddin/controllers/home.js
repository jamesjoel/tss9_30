const express = require("express");
const routes = express.Router();
const employee = require("../models/employee");
const mongodb = require("mongodb");

module.exports = function() {
  routes.get("/", function(req, res) {
    employee.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return;
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send("No Data Found");
        }
      }
    });
  });

  routes.post("/", function(req, res) {
    employee.insert(req.body, function(err, result) {
      if (err) {
        console.log(err);
        return;
      } else {
        res.send(result.ops[0]);
        console.log("Data Inserted");
        console.log(result);
        // res.redirect("/");
      }
    });
  });

  return routes;
};
