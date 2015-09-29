var http = require('http')
var fs = require('fs')
var server = http.createServer(callback)

server.listen(Number(process.argv[2]));
function callback(req,res) {
	var file = fs.createReadStream(process.argv[3]);
	file.pipe(res);
}

