var lineReader      = require('line-reader');
var _               = require('underscore');

var myStrings = [];
lineReader.eachLine('easy_strings.txt', function(line) {
    var theLine = line.toString();
    myStrings.push(theLine);
}).then(function() {
    var bucketCounts = [];
    _.forEach(myStrings, function(line) {
        var theLength = line.split("").length;
        for (var i = 0; i < theLength; i++) {
            // Add statement here for handling nonexistent keys
            bucketCounts[i][line[i]] += 1;
        }
    });
    console.log(bucketCounts);
});

