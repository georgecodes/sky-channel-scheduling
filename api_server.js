var express = require("express");
var bodyParser = require("body-parser");

var app = express();

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.json({"error" : false, "message" : "Hello !"});
	}

}