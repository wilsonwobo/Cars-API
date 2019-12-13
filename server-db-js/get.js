function listCars(app, mysqlDb) {
   app.get('/', function (req, res) {
      mysqlDb.query("SELECT * FROM cars;")
      .then(data => {
         res.send(data)
      })
      .catch(err => {
         res.send(err)
      });
   })
}

module.exports = listCars;
