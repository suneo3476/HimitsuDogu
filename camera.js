var fs = require('fs');
var rs = fs.createReadStream('./output.txt');
var readline = require('readline');

var rl = readline.createInterface(rs, {
	output: process.stdout
});

rl.on('line', function(line){
	var name = line.match(/カメラ|フォト|映|写|撮|影|像/);
	if(name!=null){
		console.log(name);
	}
});