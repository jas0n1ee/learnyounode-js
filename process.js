var mod = require('./helloword1.js');
var fs = require('fs');
function cb(err, list){
	if (err)
		return;
	for (var i in list)
		console.log(list[i])
}
mod(process.argv[2], process.argv[3], cb);

