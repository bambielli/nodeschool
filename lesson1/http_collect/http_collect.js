  //my way
  var http = require('http');
  var bl = require('bl');
  
  http.get(process.argv[2], function (request) {
    request.setEncoding('utf8')
    request.pipe(bl( function (err,data){
    	console.log(data.length);
    	console.log(data.toString());
    }))
    request.on('error', console.error);
  })

//the highway

var http = require('http')
  var bl = require('bl')
  
  http.get(process.argv[2], function (request) {
    request.pipe(bl(function (err, data) {
      if (err)
        return console.error(data)
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))  
  })
