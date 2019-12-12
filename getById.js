var fs = require("fs");

function listCarById(app) {
    app.get('/:id', function (req, res) {
        fs.readFile(__dirname + "/" + "cars.json", 'utf8', function (err, data) {
            data = JSON.parse(data);
            car = data["car" + req.params.id]
            res.end(JSON.stringify(car));
        });
    })
}

module.exports = listCarById;
