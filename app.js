var listCars = require('./get');
var addCar = require('./post');

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var jsonName = process.argv[2]

app.use(bodyParser.json());

listCars(app, jsonName);
addCar(app, jsonName);

var server = app.listen(8082, function () {
    var port = server.address().port;
    console.log("App listening on port %s", port);
})