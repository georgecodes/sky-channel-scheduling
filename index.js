var express = require('express');

//NPM Module to integrate Handlerbars UI template engine with Express
var exphbs  = require('express-handlebars');

var app = express();

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Defining middleware to serve static files
app.use('/static', express.static('public'));