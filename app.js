var listCars = require('./get.js');
var express = require('express');
var app = express();

listCars(app);

var server = app.listen(8081, function () {
    var port = server.address().port;
    console.log("App listening on port %s", port);
})


