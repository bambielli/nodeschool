//This is how I did it

sum = 0;
process.argv.forEach( function(t) {
	if (!(isNaN(Number(t)))) {
		sum += Number(t);
	}
});

console.log(sum);


//This is how they did it

var result = 0

for (var i = 2; i < process.argv.length; i++)
result += Number(process.argv[i])

console.log(result)

//Theirs is much better
