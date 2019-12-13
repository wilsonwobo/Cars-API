function listCarById(app, mysqlDb) {
    app.get('/:id', function (req, res) {
        let id = req.params.id;
        mysqlDb.query("SELECT * FROM cars WHERE cars.id=" + id + ";")
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            });
    })
}

module.exports = listCarById;
