//create a program that takes a folder and an extension, and prints
//each element of that folder with the extensions

//my way

var fs = require('fs');
fs.readdir(process.argv[2], function(err, list){
	if(!err){
		var re = new RegExp('\\.'+process.argv[3])
		list.forEach(function(l){
			if(re.test(l)){
				console.log(l);
			}
		});
	}
});

//RegExp was not working for some reason...had to add an extra slash in the escape.
//Guess that kind of makes sense, needed to escape the escape?

