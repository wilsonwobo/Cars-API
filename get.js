var fs = require("fs");

function listCars(app) {
    app.get('/listCars', function (req, res) {
        fs.readFile(__dirname + "/" + "cars.json", 'utf8', function (err, data) {
            console.log(data);
            res.end(data);
        });
    })
}

module.exports = listCars;
