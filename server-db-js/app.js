var listCars = require('./get.js');
var deleteCar = require('./delete.js');
var listCarById = require('./getById.js');
var putCar = require('./put.js');
var addCar = require('./post');
var MysqlConnection = require('../functions-db-js/query.js');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

const mysqlDb = new MysqlConnection();

listCars(app, mysqlDb);
listCarById(app, mysqlDb);
deleteCar(app, mysqlDb);
putCar(app, mysqlDb);
addCar(app, mysqlDb);

var server = app.listen(8082, function () {
    var port = server.address().port;
    console.log("App listening on port %s", port);
})
