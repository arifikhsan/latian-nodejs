let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk) {
  console.log('new chunk received');
  myWriteStream.write(chunk);
});
