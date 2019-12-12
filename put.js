var fs = require("fs");

function putCar(app) {
    app.put('/update/:id', function (req, res) {
        fs.readFile(__dirname + "/" + "cars.json", 'utf8', function (err, data) {
            data = JSON.parse(data);
            car = data["car" + req.params.id];

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
