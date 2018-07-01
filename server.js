var server = (function(){
  var express = require('express'),
  app = express();

  app.use(express.static('public'));

  // accept GET request
  app.get('/', function (req, res) {
    res.send('Got a GET request');
  });

  // accept POST request
  app.post('/', function (req, res) {
    res.send('Got a POST request');
  });

  // accept PUT request
  app.put('/', function (req, res) {
    res.send('Got a PUT request');
  });

  // accept DELETE request
  app.delete('/', function (req, res) {
    res.send('Got a DELETE request');
  });


})();
