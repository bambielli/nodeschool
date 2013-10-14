
//my way
var thr = require('through');
var tr = thr(write, end);

function write (buf){
	this.queue(buf.toString().toUpperCase());
};

function end () {
	
};

process.stdin.pipe(tr).pipe(process.stdout);

//the highway
//looks like I didn't need to write the end function...
//could have just written in the write function as the callback for 
//the through module function.
    var through = require('through');
    var tr = through(function (buf) {
        this.queue(buf.toString().toUpperCase());
    });
    process.stdin.pipe(tr).pipe(process.stdout);
