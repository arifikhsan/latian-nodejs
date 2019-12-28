let express = require('express');

let app = express();
app.get('/', function(request, response) {
  response.send('this is the homepage');
});

app.get('/contact', function(request, response) {
  response.send('this is the contact page');
});

app.get('/api', function(request, response) {
  response.send({ message: 'Hello world' });
});

app.get('/profile/:name', function(request, response) {
  response.send(
    'You requested to see ap profile with name of ' + request.params.name
  );
});

app.listen(3000);
