
//model - burger app data
//using strict for only declared variables
'use strict';
//* Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
//Inside `burger.js`, import `orm.js` into `burger.js`
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
class Burger {
  constructor(database = orm) {
    this.db = database;
  }
  // Show all burgers currently in the database
  list() {
    return this.db.selectAll();
  }
    // Add a new burger to the db.
    add(burger) {
      return this.db.insertOne(burger);
    }
    // devour the burger with using the "id"
    devour(id, data = { devoured: true }) {
      return this.db.updateOne(id, data);
    }
    // Delete a burger from the db, using the 'id'
    delete(id, data = {}) {
      return this.db.deleteOne(id, data);
    }
  }

// Export at the end of the burger.js file.
module.exports = new Burger();