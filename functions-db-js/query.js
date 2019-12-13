var mysql = require('mysql');

class MysqlConnection {
    constructor() {
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "password",
            database: "carsdb"
        });
    }

    query(query) {
        return new Promise((res, rej) => {
            this.connection.query(query, function (err, result) {
                console.log(result);
                if (err) rej(err);
                res(result);
            });
        })
    }

    endConnection() {
        this.connection.end()
    }
}

module.exports = MysqlConnection;
