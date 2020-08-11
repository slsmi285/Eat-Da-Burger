var mysql = require("mysql");    
var connection;

//creating connection
// var connection = mysql.createConnection({ // Set connection parameters
//   host: "localhost",
//   user: "root",
//   password: "null",
//   database: "burgers_db"
// });

if(process.env.JAWSDB_URL) {            
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({ // Set local connection parameters
    host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "rooaeoq5stbg0ayn15nt",
    password: "pcff2wboo6rnn34t",
    database: "qtllgpvg135rc5om"
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


