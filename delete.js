var fs = require("fs");

function deleteCar(app) {
    app.get('/deleteCar/:id', function (req, res) {
        fs.readFile(__dirname + "/" + "cars.json", 'utf8', function (err, data) {
            var newData = JSON.parse(data);
            delete newData["car" + req.params.id];

            console.log(newData);
            res.end(JSON.stringify(newData));
        });
    })
}

module.exports = deleteCar;