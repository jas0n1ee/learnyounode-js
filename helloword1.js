var path = require('path');
var fs = require('fs');
module.exports = function(dir, ext, callback) {
	var list = [];
	fs.readdir(dir,function(err, files) {
		if (err)
			return callback(err, list);
		files.forEach(function(file) {
			if(path.extname(file) == ('.' + ext)) {
				list.push(file)
			}
		});
		return callback(null, list);
	});
}
