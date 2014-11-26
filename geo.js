var fs = require('fs');
var rs = fs.createReadStream('./output.txt');
var readline = require('readline');

var rl = readline.createInterface(rs, {
	output: process.stdout
});

rl.on('line', function(line){
	var name = line.match(/地図|マップ|ちず|世界|全国|地球|儀|地理|観光|旅|りょこう|たび/);
	if(name!=null){
		console.log(name);
	}
});