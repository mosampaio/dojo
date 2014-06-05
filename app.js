var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  tasks=["bla"];

app.use(express.static(__dirname+'/public'));
app.use(bodyParser())

app.listen(8080, function() {
  console.log('server is up!');
});

app.get('/api/tasks', function(request, response){
  response.send(tasks);
});

app.post('/api/task/', function (request, response) {
  tasks.push(request.body.task);
});