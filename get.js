var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listCars', function (req, res) {
   fs.readFile(__dirname + "/" + "cars.json", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
   });
})

var server = app.listen(8081, function () {
   var port = server.address().port;
   console.log("App listening on port %s", port);
})
