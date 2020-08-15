//require express
var express = require("express");   
//require express-handlebars
var exphbs = require("express-handlebars");    
//require body-parser                                
var bodyParser = require("body-parser");                            
//require burgers_controllers
var routes = require("./controllers/burgers_controller.js");      
//express call using app
var app = express();                       
//local host port 8080                        
var PORT = process.env.PORT || 3000;     
//var http = require('http');                       

//public folder
app.use(express.static("public"));                                

//parses JSON
app.use(bodyParser.json());                                         
app.use(bodyParser.urlencoded({ extended: true }));                 

//handlebars run using main for content
app.engine("handlebars", exphbs({                                 
    defaultLayout: "main"                                        
}));

app.set("view engine", "handlebars");                               

//calls api routes
app.use(routes);    


// Start the server to listen to the port
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
