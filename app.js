var listCars = require('./get.js');
var deleteCar = require('./delete.js');
var express = require('express');
var app = express();

listCars(app);
deleteCar(app);

var server = app.listen(8081, function () {
    var port = server.address().port;
    console.log("App listening on port %s", port);
})
