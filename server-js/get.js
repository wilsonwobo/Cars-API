var fs = require("fs");

function listCars(app, jsonName) {
   app.get('/', function (req, res) {
      fs.readFile(__dirname + "/" + jsonName, 'utf8', function (err, data) {
         res.end(data);
      });
   })
}

module.exports = listCars;
