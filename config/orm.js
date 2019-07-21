var connection = require('./connection');

var orm = {
    selectAll: function(table,cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(table,col,value) {
        var queryString = "INSERT INTO ?? (??,dt_stamp) VALUES(?,NOW());";
        connection.query(queryString, [table,col,value], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },

      updateOne: function(table,UPD_col,newValue,WHERE_col,id_value) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString,[table,UPD_col,newValue,WHERE_col,id_value], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      }
}

module.exports = orm;