//Filename: express_bootstrap.js
var express = require('express');
var path = require("path");

//NPM Module to integrate Handlerbars UI template engine with Express
var exphbs  = require('express-handlebars');

var app = express();

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));

//Defining middleware to serve static files
app.use('/static', express.static('public'));

app.get("/home", function(req, res){
  res.render("home")
});

app.listen(3000, function(){
  console.log('Server up: http://localhost:3000');
});