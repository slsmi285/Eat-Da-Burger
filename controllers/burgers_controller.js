//Inside the `burgers_controller.js` file, import the following:

  // * Express
   //* `burger.js`
   //* 
   //* 
   //4. Create the `router` for the app, and export the `router` at the end of your file.


   //var express = require("express");

   var router = express.Router();
   
   // Import the model (cat.js) to use its database functions.
   var burger = require("../models/burger.js");
   
//
// Routers for the burger app
//
class Router {
  //
  // Initialize an instance with express app
  //
  // PARAMS:
  // * app = initialized express app
  //
  constructor(expressApp) {
    this.app = expressApp;
  }  
  
  //
  // Start all routers
  //
  start() {
    this.index();
    this.add();
    this.devour();
    this.remove();
  }
  
  //
  // Index Route
  //
  index() {
    this.app.get('/', (req, res) => {
      burger.list()
      .then(burgers => {
        res.render('index', {
          burgers: burgers
        });
      })
      .catch(error => console.log(error));
    });
  }
  
  //
  // Add Route
  //
  add() {
    this.app.post('/add', (req, res) => {
      const burgerName = req.body.burgerName;

      if (/^\W*$/.test(burgerName)) {
        console.log('No empty burger name allowed');
      }
      else {
        burger.add(burgerName)
          .then(result => {
            res.redirect('/');
          })
          .catch(error => console.log(error));
      }
    });
  }
  
  //
  // Devour route
  //
  devour() {
    this.app.put('/devour/:id', (req, res) => {
      // Convert "true" string to 1 (boolean)
      if ('devoured' in req.body && req.body['devoured'] === 'true') {
        req.body['devoured'] = 1;
      }
      
      burger.devour(parseInt(req.params.id), req.body)
        .then(result => {
          res.redirect('/');
        })
        .catch(error => {
          console.log(error);
          res.redirect('/');
        });
    });
  }
  
  //
  // Remove route
  //
  remove() {
    this.app.delete('/remove/:id', (req, res) => {
      burger.delete(parseInt(req.params.id))
        .then(result => {
          res.redirect('/');
        })
        .catch(error => {
          console.log(error);
          res.redirect('/');
        });
    });
  }
}

   
   // Export routes for server.js to use.
   module.exports = router;
   