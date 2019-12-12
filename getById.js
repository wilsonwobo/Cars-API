var fs = require("fs");

function listCarById(app, jsonName) {
    app.get('/:id', function (req, res) {
        fs.readFile(__dirname + "/" + jsonName, 'utf8', function (err, data) {
            data = JSON.parse(data);
            car = data[req.params.id]
            res.end(JSON.stringify(car));
        });
    })
}

module.exports = listCarById;
