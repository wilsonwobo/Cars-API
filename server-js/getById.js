var readFile = require('../functions-js/readFile.js');

function listCarById(app, jsonName) {
    app.get('/:id', function (req, res) {
        readFile(jsonName)
        .then(data => {
            car = data[req.params.id]
            res.end(JSON.stringify(car));
        });
    })
}

module.exports = listCarById;
