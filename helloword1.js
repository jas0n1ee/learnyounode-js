var http = require('http')
var bl = require('bl')
http.get(process.argv[2],function (response) {
//	response.setEncoding('utf8')
	response.pipe(bl(function (err,data) {
		if (err) return;
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});
