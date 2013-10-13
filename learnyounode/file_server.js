//my Way
var http = require('http');
var server = http.createServer(function (req, res){
var fs = require('fs');	
	var stream = fs.createReadStream(process.argv[2]);
	stream.pipe(res);
});

server.listen(8000);


//the highway
  var http = require('http')
  var fs = require('fs')
  
  var server = http.createServer(function (req, res) {
    fs.createReadStream(process.argv[2]).pipe(res)
  })
  server.listen(8001)

