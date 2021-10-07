var fs = require ('fs');


var myReadStream = fs.createReadStream(__dirname + '/info.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/info2.txt');

myReadStream.pipe(myWriteStream);