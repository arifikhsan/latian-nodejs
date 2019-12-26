var fs = require('fs');

// read file
let readme = fs.readFileSync('readme.txt', 'utf8');
console.log(readme);

// write file
fs.writeFileSync('writeme.txt', readme);
