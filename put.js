var fs = require("fs");

function putCar(app, jsonName) {
    app.put('/:id', function (req, res) {
        fs.readFile(__dirname + "/" + jsonName, 'utf8', function (err, data) {
            data = JSON.parse(data);
            car = data[req.params.id];

            for (key of Object.keys(req.body)) {
                if (Object.keys(car).includes(key)) {
                    car[key] = req.body[key];
                }
            }

            res.end(JSON.stringify(car));
        });
    })
}

module.exports = putCar;
