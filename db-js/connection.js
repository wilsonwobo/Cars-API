var mysql = require('mysql');

var connectionToDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "carsdb"
});

module.exports = connectionToDb;
