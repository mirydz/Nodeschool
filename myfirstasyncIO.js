var fs = require('fs');

var fileToRead =  process.argv[2] || "file.txt";

fs.readFile(fileToRead, function doneReading (err, fileContents) {
    var noLines = fileContents.toString().split('\n').length-1;;
    console.log(noLines);
});

