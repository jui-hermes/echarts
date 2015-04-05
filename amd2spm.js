// usage: node amd2spm.js echarts-all.js echarts.js

var Fs = require('fs');

var fromFile = process.argv[2];
var toFile = process.argv[3];

var content = Fs.readFileSync(fromFile, {
	encoding : 'utf8'
});

content = content.replace(/(\b)(require\b)/g, '$1_$2');
content = content.replace(/(\b)(define\b)/g, '$1_$2');

content += "\nmodule.exports = echarts;\n";

console.log(content);

Fs.writeFileSync(toFile, content);
