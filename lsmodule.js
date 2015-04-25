var fs = require("fs");

module.exports = function(dirName, extension, callback) {

    var pattern = extension + "$";
    var regex = new RegExp(pattern, "g");
    fs.readdir(dirName, function (err, list) {
        if (err) {
            callback(err);
        } else {
            var result = [];
            for (var index = 0; index < list.length; index++) {
                if (regex.test(list[index])) {
                    result.push(list[index]);
                }
            }
            callback(null, result);
        }
    });
};
