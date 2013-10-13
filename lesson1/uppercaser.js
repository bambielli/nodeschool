//my way
var http = require('http');
var server = http.createServer(function (req, res){
	var map = require('through2-map');
	req.pipe(map(function (chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(8000);

//the highway

  var http = require('http')
  var map = require('through2-map')
  
  var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
      return res.end('send me a POST\n')
  
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  })
  
  server.listen(8001)
