var express = require("express");

var ApiV1 = function(config) {

	var SkyBox = require('./../models/SkyBox');
	var router = express.Router();

	router.get('/', function(req, res) {
	  res.send('Hello from APIv1 root route.');
	});

	router.get("/skyboxes", function(req, res) {
		new SkyBox.SkyBox(config).fetchAll()
			.then(function (skyboxes) {
				res.json(skyboxes);
			}).catch(function (error) {
				console.log(error);
				res.send('An error occured');
			});
	});
	this.router = router;
}

module.exports.ApiController = ApiV1
