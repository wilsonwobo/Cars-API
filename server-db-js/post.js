function addCar(app, mysqlDb) {
    app.post('/', function (req, res) {
        mysqlDb.query("INSERT INTO \
                      carsdb.cars (make, model, colour, year) \
                      VALUES \
                      ('" + req.body.make + "', '" + req.body.model + "', '" + req.body.colour + "', '" + req.body.year + "');")
            .then(data => {
                res.send("Added: " + req.body.make + " " + req.body.model + " into cars database.");
            })
            .catch(err => {
                res.send(err)
            });
    });
}

module.exports = addCar;
