//this is the main application server for burger app
'use strict';


var path = require('path');
var PORT = process.env.PORT || 3000;

//load express
var express = require("express");
var app = express();



// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));
// Set static directory reference path
app.use(express.static(path.join(__dirname, 'public'))); 

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
//router.start();

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
