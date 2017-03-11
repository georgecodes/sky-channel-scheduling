var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var apiApp = require("./controllers/ApiController.js");
var webapp = require("./controllers/WebAppController.js");
var path = require("path");

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));

app.use('/static', express.static('public'));

app.use("/api/v1", apiApp);
app.use("/", webapp);

app.listen(3000,function(){
  console.log("I am listening at PORT 3000");
})