var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('nodewebapi listening on port 3000!');
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});