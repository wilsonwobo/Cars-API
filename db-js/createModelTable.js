var MysqlConnection = require('../functions-db-js/query.js');

var con = new MysqlConnection();

query =
    "CREATE TABLE model ( \
    model VARCHAR(255), \
    make INT, \
    PRIMARY KEY (id), \
    id INT NOT NULL AUTO_INCREMENT \
    )";

con.connection.connect(function (err) {
    if (err) rej(err);
    console.log("Connected!");
    var sql = query;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        con.end();
    });
});
