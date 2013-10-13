//My way

var fs = require('fs');
var b = fs.readFileSync(process.argv[2]);
console.log((b.toString().split('\n').length) - 1);

//the Highway

var fs = require('fs')
console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1)

//You can pass in a second argument to readFileSync 'utf8', which will return a string.


