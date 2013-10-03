var http = require('http');


http.get(process.argv[2], function(request){
	request.setEncoding('utf8').on('data', function(data){
		console.log(data);
	});
	request.on('error', function(error){
		console.log(error);
	});
	request.on('end', function(end){

	});
});