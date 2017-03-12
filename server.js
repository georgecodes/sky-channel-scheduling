var environment = process.env.NODE_ENV || 'development'
var exphbs  = require('express-handlebars');

var config = { "environment": environment };

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var ApiController = require("./controllers/ApiController.js");

var apiController = new ApiController.ApiController(config);

var webapp = require("./controllers/WebAppController.js");


app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));


app.use('/static', express.static('public'));


app.use("/api/v1", apiController.router);
app.use("/", webapp);

app.listen(3000,function(){
  console.log("I am listening at PORT 3000");
})