var express = require("express");
var SkyBox = require('./../models/SkyBox');

var apiv1 = express.Router();

apiv1.get('/', function(req, res) {
  res.send('Hello from APIv1 root route.');
});

apiv1.get("/skyboxes", function(req, res) {
	new SkyBox.SkyBox().fetchAll()
		.then(function (skyboxes) {
			res.json(skyboxes);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
});

module.exports = apiv1;