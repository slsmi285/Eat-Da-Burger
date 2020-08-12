var mysql = require("mysql");    
var connection;
require("dotenv").config();


//creating connection
// var connection = mysql.createConnection({ // Set connection parameters
//   host: "localhost",
//   user: "root",
//   password: "0118488320613",
//   database: "burgers_db"
// });
console.log(process.env.JAWSDB_URL);
if(process.env.JAWSDB_URL) {            
    connection = mysql.createConnection({
      host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "aeoq5stbg0ayn15n",
      password: "pcff2wboo6rnn34t",
      database: "qtllgpvg135rc5om"
    });

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


