var net = require('net')
var util = require('util')
var server = net.createServer(callback)
server.listen(Number(process.argv[2]));
// "YYYY-MM-DD hh:mm"
// "2013-07-06 17:42"
function callback(socket) {
	var date = new Date();
    socket.write(date.getFullYear() + '-' + 
		 ((date.getMonth()+1)>10 ? (date.getMonth() + 1) : ('0' + (date.getMonth()+1))) + '-' +
		 (date.getDate()>10 ? date.getDate() : ('0' + date.getDate())) + ' ' +
		 (date.getHours()>10 ? date.getHours() : ('0' + date.getHours())) + ':' +
		 (date.getMinutes()>10 ? date.getMinutes() : ('0' + date.getMinutes())) + '\n')
	socket.end();
}

