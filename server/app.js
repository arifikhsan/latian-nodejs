let http = require('http');
let server = http.createServer(function(request, response) {
  console.log('request was made: ');
  console.log(request);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('hey ninjas');
});
server.listen(3000, '127.0.0.1');
console.log('you dawgs, now listetning to port 3000');
