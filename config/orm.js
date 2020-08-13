
var connection = require("./connection.js");
const burger = require("../models/burger.js");
//Select All ORM
var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    //Insert 
    insertOne: function(Salmon, Turkey, Bacon, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [Salmon, Turkey, Bacon], function(err, Alfalfa){
            if (err) throw err;
        callback(Alfalfa);
    });
    },
    //Update
    updateOne: function(colVal, id, callback) {
    var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
        connection.query(queryString, [id], function(err, res) {
      
            if (err) throw err;
      
        callback(res);
        });
    },
    //Delete
    deleteOne: function(id, callback) {
        var queryString = "DELETE FROM burgers WHERE " + id + ";";
        connection.query(queryString, [id], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
}
//Exports ORM
module.exports = orm;



