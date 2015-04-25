var mymodule = require("./lsmodule");

var pathArg = process.argv[2] || __dirname;
var extension = process.argv[3] || "js";

function callback(err, data) {
    if (err) {
        console.log(err);
    } else {
        //console.log(data);
        data.forEach(function (fileName) {
            console.log(fileName);
        });
    }
}

mymodule(pathArg, extension, callback);