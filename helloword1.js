function callback (err, data) {
	if (err)
		return;
	console.log(data.toString().split('\n').length-1)
}
var fs = require('fs')
var files = fs.readFile(process.argv[2],callback)
