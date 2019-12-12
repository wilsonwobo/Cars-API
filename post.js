var fs = require("fs");

function addCar(app, jsonName){
    app.post('/cars', function (req, res) {
        // First read existing users.

        fs.readFile(__dirname + "/" + jsonName, 'utf8', function (err, data) {
            if(!err){
                data = JSON.parse( data );

                let numOfCars = Object.keys(data).length;
                let nameOfCar = (numOfCars+1).toString();

                var car = {};
                car[nameOfCar] = {
                    "make" : req.body.make,
                    "model" : req.body.model,
                    "colour" : req.body.colour,
                    "year" : req.body.make
                }
                
                data[nameOfCar] = car[nameOfCar];
                res.send( data );

                console.log("Added: " + data[nameOfCar].make + " " + data[nameOfCar].model);
            }
         });
    });
}

module.exports = addCar;