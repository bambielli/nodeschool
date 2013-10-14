
//my Way
var split = require('split');
var through = require('through');
var count = 1;
process.stdin.pipe(split()).pipe(through(function (line) {
        if(count%2 === 0){
        	this.queue(line.toString().toUpperCase());
        	count++;	
        }
        else{
        	this.queue(line.toString().toLowerCase());
        	count++;
        }})).pipe(through(function (line) {
        console.log(line.toString())})).pipe(process.stdout);

//the Highway
var through = require('through');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf) {
    var line = buf.toString();
    this.queue(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
