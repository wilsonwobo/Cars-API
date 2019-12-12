var listCars = require('./get.js');
var deleteCar = require('./delete.js');
var listCarById = require('./getById.js');
var putCar = require('./put.js');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

listCars(app);
listCarById(app);
deleteCar(app);
putCar(app);

var server = app.listen(3333, function () {
    var port = server.address().port;
    console.log("App listening on port %s", port);
})
