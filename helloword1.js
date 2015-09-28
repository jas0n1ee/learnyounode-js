var fs = require('fs');
var path = require('path');
function filter(err, files) {
	if (err)
		return;
	for(var i = 0; i < files.length; i++)
		if (path.extname(files[i]) == ('.' + process.argv[3]))
			console.log(files[i]);
}
fs.readdir(process.argv[2],filter);
