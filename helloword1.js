var addon = require('./build/Release/addon');
console.log(addon('hello').msg + addon('world').msg)
