var readFile = require('../functions-js/readFile.js');

function getColumns(mysqlDb) {
    let columns;
    return new Promise((res, rej) => {
        mysqlDb.query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'carsdb' AND TABLE_NAME = 'cars';")
            .then(data => {
                columns = data.map(obj => obj.COLUMN_NAME);
                res(columns);
            })
            .catch(err => {
                rej(err)
            });
    })
}

function putCar(app, mysqlDb) {
    app.put('/:id', function (req, res) {
        getColumns(mysqlDb)
            .then(columns => {
                let queryString ="UPDATE cars SET ";
                for (let [key, value] of Object.entries(req.body)) {
                    if (columns.includes(key)) {
                        queryString += key + " = '" + value + "',";
                    }
                }
                queryString = queryString.slice(0, queryString.length-1);
                queryString += " WHERE cars.id = " + req.params.id + ";";
                mysqlDb.query(queryString)
                    .then(data => {
                        res.send("Updated entry no. " + req.params.id);
                    })
                    .catch(err => {
                        console.log("\n\nINSIDE CATCH OF UPDATE\n\n")
                        res.send(err)
                    });
            })
            .catch(err => {
                console.log("\n\nIN CATCH OF GET\n\n");
                res.send(err);
            })
    })
}

module.exports = putCar;
