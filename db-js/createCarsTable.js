var mysql = require('mysql');
var con = require('./connection.js');

query =
    "CREATE TABLE cars ( \
    make VARCHAR(255), \
    model VARCHAR(255), \
    colour VARCHAR(255), \
    year VARCHAR(255), \
    PRIMARY KEY (id), \
    id INT NOT NULL AUTO_INCREMENT \
    )";

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = query;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        con.end();
    });
});
