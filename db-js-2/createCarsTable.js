var MysqlConnection = require('../functions-db-js/query.js');

var con = new MysqlConnection();

query =
    "CREATE TABLE cars ( \
    make_id INT, \
    model_id INT, \
    colour VARCHAR(255), \
    year VARCHAR(255), \
    PRIMARY KEY (id), \
    id INT NOT NULL AUTO_INCREMENT, \
    FOREIGN KEY (make_id) REFERENCES make(id), \
    FOREIGN KEY (model_id) REFERENCES model(id) \
    )";

con.connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = query;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        con.end();
    });
});
