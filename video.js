var fs = require('fs');
var rs = fs.createReadStream('./output.txt');
var readline = require('readline');

var rl = readline.createInterface(rs, {
	output: process.stdout
});

rl.on('line', function(line){
	var name = line.match(/映|ビデオ/);
	if(name!=null){
		console.log(name);
	}
});