var fs = require('fs');
var rs = fs.createReadStream('./itemlist.txt');
var readline = require('readline');

var rl = readline.createInterface(rs, {
	output: process.stdout
});

var html_head="<!DOCTYPE html>"
//console.log(html_head);
rl.on('line', function(line){
	var name = line.match(/==\s{1,2}(.+)\s{1,2}==/);
	if(name!=null){
		if(!name[1].match(/出典|脚注|記号/) && !name[1].match(/^[あ-わ]$/)){
			console.log("\t"+name[1]);
		}
	}
});