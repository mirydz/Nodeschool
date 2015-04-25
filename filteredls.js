var fs = require("fs");

var pathArg = process.argv[2] || __dirname;
var extension = process.argv[3] || "txt";
var pattern = extension + "$";
var regex = new RegExp(pattern, "g");

fs.readdir(pathArg, function (err, list) {
   //console.log(list);
    for (var index = 0; index < list.length; index++) {
        if (regex.test(list[index])) {
            console.log(list[index]);
        }
    }
});

