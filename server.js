var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var apiApp = require("./controllers/ApiController.js");

app.use("/api/v1", apiApp);

app.listen(3000,function(){
  console.log("I am listening at PORT 3000");
})