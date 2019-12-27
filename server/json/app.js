let http = require('http');
let js = require('fs');

let server = http.createServer(function(request, response) {
  console.log('request was made: ' + request.url);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  var myObject = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  response.end(JSON.stringify(myObject));
});

server.listen(3000, '127.0.0.1');
console.log('you dawgs, now listetning to port 3000');
