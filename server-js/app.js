var listCars = require('./get.js');
var deleteCar = require('./delete.js');
var listCarById = require('./getById.js');
var putCar = require('./put.js');
var addCar = require('./post');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonName = process.argv[2]

app.use(bodyParser.json());

listCars(app, jsonName);
listCarById(app, jsonName);
deleteCar(app, jsonName);
putCar(app, jsonName);
addCar(app, jsonName);

var server = app.listen(8082, function () {
    var port = server.address().port;
    console.log("App listening on port %s", port);
})
