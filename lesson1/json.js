//my way
var http = require('http');
var server = http.createServer(function (req,res){
	var u = require('url').parse(req.url, true);
	res.writeHead(200, { 'Content-Type': 'application/json' })
	if(u.pathname.toString() === '/api/unixtime'){
			var d = new Date(u.query['iso']).getTime();
		res.write(JSON.stringify({'unixtime': d}));
	}
		if(u.pathname.toString() === '/api/parsetime'){
			var d = new Date(u.query['iso']);
		res.write(JSON.stringify({'hour': d.getHours(),
									'minute': d.getMinutes(),
									'second': d.getSeconds()}));
	}
	// res.write(200, { 'minute': d.getMinutes().toString()})
	// res.write(200, { 'second': d.getSeconds().toString()})
	res.end();
});
server.listen(8000);



//the highway
var http = require('http')
  var url = require('url')
  
  function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  
  function unixtime (time) {
    return { unixtime : time.getTime() }
  }
  
  var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result
  
    if (/^\/api\/parsetime/.test(req.url))
      result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
      result = unixtime(time)
  
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
    }
  })
  server.listen(8001)
