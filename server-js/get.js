var readFile = require('../functions-js/readFile.js');

function listCars(app, jsonName) {
   app.get('/', function (req, res) {
      readFile(jsonName)
      .then(data => {
         res.end(data);
      });
   })
}

module.exports = listCars;
