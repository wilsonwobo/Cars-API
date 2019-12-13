var readFile = require('../functions-js/readFile.js');

function putCar(app, jsonName) {
    app.put('/:id', function (req, res) {
        readFile(jsonName)
        .then(data => {
            car = data[req.params.id];

            for (key of Object.keys(req.body)) {
                if (Object.keys(car).includes(key)) {
                    car[key] = req.body[key];
                }
            }

            res.send(JSON.stringify(car));
        })
        .catch(err => {
            res.send(err)
        });
    })
}

module.exports = putCar;
