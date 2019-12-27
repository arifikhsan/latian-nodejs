let http = require('http');
let fs = require('fs');

let server = http.createServer(function(request, response) {
  console.log('request was made: ');
  response.writeHead(200, { 'Content-Type': 'text/html' });

  let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(response);
});
server.listen(3000, '127.0.0.1');
console.log('you dawgs, now listetning to port 3000');
