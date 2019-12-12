var fs = require("fs");

function listCars(app, jsonName){
   app.get('/cars', function (req, res) {
      fs.readFile(__dirname + "/" + jsonName, 'utf8', function (err, data) {
         console.log(data);
         res.end(data);
      });
   })
}

module.exports = listCars;