function deleteCar(app, mysqlDb) {
    app.delete('/:id', function (req, res) {
        let id = req.params.id;
        mysqlDb.query("DELETE FROM carsdb.cars WHERE cars.id = " + id + ";")
            .then(data => {
                res.send("Deleted row " + id);
            })
            .catch(err => {
                res.send(err)
            });
    })
}

module.exports = deleteCar;
