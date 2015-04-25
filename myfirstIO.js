var fs = require('fs');

var fileToRead = process.argv[2];

var buffer = fs.readFileSync(fileToRead, "utf8");

var tokens = buffer.toString().split('\n');
var noLines = tokens.length-1;


console.log(noLines);