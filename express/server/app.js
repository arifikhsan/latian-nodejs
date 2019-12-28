let express = require('express')

let app = express();
app.get('/', function(request, response) {
  response.send('this is the homepage')
})
app.get('/contact', function(request, response) {
  response.send('this is the contact page');
});
app.get('/api', function(request, response) {
  response.send({message: 'Hello world'});
});
app.listen(3000);
