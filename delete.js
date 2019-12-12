var fs = require("fs");

function deleteCar(app) {
    app.delete('/delete/:id', function (req, res) {
        fs.readFile(__dirname + "/" + "cars.json", 'utf8', function (err, data) {
            data = JSON.parse(data);
            delete data["car" + req.params.id];
            res.end(JSON.stringify(data));
        });
    })
}

module.exports = deleteCar;