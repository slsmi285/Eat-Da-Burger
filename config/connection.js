var mysql = require("mysql");    
var connection;
require('dotenv').config();

if(process.env.JAWSDB_URL) {            
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({ // Set local connection parameters
    host: "localhost",
    user: "root",
    password: "Florida89!",
    database: "burgers_db",
    dialect: "mysql"
    });
};

//creating connection
connection.connect(function(err) {     
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


//exporting for ORM
module.exports = connection;           


