let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

myReadStream.on('data', function(chunk) {
  console.log('new chunk received');
  console.log(chunk);
});
