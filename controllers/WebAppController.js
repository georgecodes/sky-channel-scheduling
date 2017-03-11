var express = require("express");

var app = express();

var webapp = express.Router();

webapp.get('/', function(req, res) {
  res.render('home');
});

module.exports = webapp;