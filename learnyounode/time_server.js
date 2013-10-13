//my Way

var net = require('net');

var server = net.createServer(function (socket){
	var date = new Date();
	var year = date.getFullYear().toString();
	var month = (date.getMonth() + 1);
	if(month <10){
		month = "0" + month.toString();
	}
	else{
		month = month.toString();
	}
	var day = date.getDate();
	if(day < 10){
		day = "0" + day.toString();
	}
	else{
		day = day.toString();
	}
	var hour = date.getHours().toString();
	var min = date.getMinutes().toString();
	var output = year + "-" + month + "-" + day + " " + hour + ":" + min + "\n"
	socket.write(output);
	socket.end();
});

server.listen(8000);


//The Highway
  var net = require('net')
  
  function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
  }
  
  function now () {
    var d = new Date()
    return d.getFullYear() + '-'
      + zeroFill(d.getMonth() + 1) + '-'
      + zeroFill(d.getDate()) + ' '
      + zeroFill(d.getHours()) + ':'
      + zeroFill(d.getMinutes())
  }
  
  var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
  })
  server.listen(8001)
  
