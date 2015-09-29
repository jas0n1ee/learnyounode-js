var http = require('http');
var url = require('url');
var server = http.createServer(callback);

server.listen(Number(process.argv[2]));
function callback(req,res) {
	res.writeHead(200,{ 'Content-Type': 'application/json' });
	var parse = url.parse(req.url, true);
	var date = new Date(parse.query.iso.split('Z')[0]);
	if (parse.pathname == "/api/parsetime") {
		var json = JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		});
		res.write(json);
		res.end();
	}
	if (parse.pathname == "/api/unixtime") {	
		var json = JSON.stringify({
			unixtime : date.getTime()
		});
		res.write(json);
		res.end();
	}
}

