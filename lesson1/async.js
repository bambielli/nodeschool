 //my way
  var http = require('http');
  var bl = require('bl');
  var stack = [];
  http.get(process.argv[2], function (request) {
    request.setEncoding('utf8')
    request.pipe(bl( function (err,data){
      data = data.toString();
      stack[0] = data;
      http.get(process.argv[3], function (request) {
        request.setEncoding('utf8')
        request.pipe(bl( function (err,data){
          data = data.toString();
          stack[1] = data;
          http.get(process.argv[4], function (request) {
    request.setEncoding('utf8')
    request.pipe(bl( function (err,data){
      data = data.toString();
      stack[2] = data;
      console.log(stack[0]);
      console.log(stack[1]);
      console.log(stack[2]);
    }))
    request.on('error', console.error);
  })

        }))
        request.on('error', console.error);
      })

    }))
    request.on('error', console.error);
  })

//the highway

  var http = require('http')
  var bl = require('bl')
  var results = []
  var count = 0
  
  function printResults () {
    for (var i = 0; i < 3; i++)
      console.log(results[i])
  }
  
  function httpGet (index) {
    http.get(process.argv[2 + index], function (request) {
      request.pipe(bl(function (err, data) {
        if (err)
          return console.error(data)
  
        results[index] = data.toString()
        count++
  
        if (count == 3) // yay! we are the last one!
          printResults()
      }))
    })
  }
  
  for (var i = 0; i < 3; i++)
    httpGet(i)
