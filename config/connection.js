var mysql = require("mysql");    
var connection;
//require('dotenv').config();

//if(process.env.JAWSDB_URL) {            
    //connection = mysql.createConnection(process.env.JAWSDB_URL);

//} else {
  connection = mysql.createConnection({ // Set local connection parameters
    host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "aeoq5stbg0ayn15n",
    password: "Florida8pcff2wboo6rnn34t9!",
    database: "qtllgpvg135rc5om",
    dialect: "mysql"
    });


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


