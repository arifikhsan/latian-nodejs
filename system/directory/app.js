let fs = require('fs');

// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// fs.mkdir('stuff', function() {
//   fs.readFile('readme.txt', 'utf8', function(err, data) {
//     fs.writeFile('./stuff/writeme.txt', data, function(err) {
//       console.log('done');
//     });
//   });
// });

fs.unlink('./stuff/writeme.txt', function() {
  fs.rmdir('suff', function() {
    console.log('donee');
  });
});
