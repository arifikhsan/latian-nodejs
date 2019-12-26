let fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data) {
  console.log(data);
  fs.writeFile('writemeasync.txt', data, function(err) {
    console.log(err);
    console.log('done writing');
  });
});

console.log('test');
