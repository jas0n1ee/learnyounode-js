var fs = require('fs')
var files = fs.readFileSync(process.argv[2])
console.log(files.toString().split('\n').length-1)
