var readFile = require('../functions-js/readFile.js');

function deleteCar(app, jsonName) {
    app.delete('/:id', function (req, res) {
        readFile(jsonName)
        .then(data => {
            delete data[req.params.id];
            res.send(JSON.stringify(data));
        })
        .catch(err => {
            res.send(err)
        });
    })
}

module.exports = deleteCar;