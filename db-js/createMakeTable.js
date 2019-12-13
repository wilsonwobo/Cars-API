var mysql = require('mysql');
var con = require('./connection.js');

query = 
"CREATE TABLE make ( \
    make VARCHAR(255), \
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
    });
});
