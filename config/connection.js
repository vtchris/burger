require("dotenv").config();
var keys = require("./keys");
var mysql = require('mysql');

var connection;
// MySql connection string
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: keys.mysql.id,
        password: keys.mysql.p,
        database: "burgers_db"
    });
}
// Test database connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;