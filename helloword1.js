var http = require('http')
var bl = require('bl')
var list = [];
var fin = 0;
function proc(url,i,callback) {
	http.get(url,function (response) {
		response.pipe(bl(function (err,data) {
			if (err) return;
			list[i] = data.toString();
			fin ++;
			callback(list);
		}));
	});
}
for (var i = 0;i < 3;i++)
	proc(process.argv[i+2],i,function(list) {
		if (fin == 3)
			for(var j = 0; j< 3; j++)
				console.log(list[j])
	})
