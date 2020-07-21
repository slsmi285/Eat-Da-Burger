//Inside `burger.js`, import `orm.js` into `burger.js`

//* Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//* Export at the end of the `burger.js` file.

'use strict';

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

class Burger {
    constructor(database = orm) {
        this.db = databse;
    }
}

//
  // Show all burgers currently in the database
  //
  list() {
    return this.db.selectAll();
  }
  
  //
  // Add a new burger into the database
  //
  add(burger) {
    return this.db.insertOne(burger);
  }
  
  //
  // Devour a burger with the "id"
  //
  devour(id, data = { devoured: true }) {
    return this.db.updateOne(id, data);
  }
  
  //
  // Delete a burger with the "id"
  //
  delete(id, data = {}) {
    return this.db.deleteOne(id, data);
  }
}

module.exports = new Burger();