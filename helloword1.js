var http = require('http')
var fs = require('fs')
var map = require('through2-map')
var server = http.createServer(callback)

server.listen(Number(process.argv[2]));
function callback(req,res) {
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
}

