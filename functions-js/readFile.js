var fs = require("fs");

function readFile(jsonName) {
    return new Promise((res, rej) => {
        fs.readFile(__dirname + "/" + jsonName, 'utf8', function (err, data) {
            if (err){
                rej(err.message)
            } else{
                res(JSON.parse(data));
            }
        });
    });
}

module.exports = readFile;