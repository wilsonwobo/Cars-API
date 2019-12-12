var fs = require("fs");

function deleteCar(app, jsonName) {
    app.delete('/:id', function (req, res) {
        fs.readFile(__dirname + "/" + jsonName, 'utf8', function (err, data) {
            data = JSON.parse(data);
            delete data[req.params.id];
            res.end(JSON.stringify(data));
        });
    })
}

module.exports = deleteCar;