var express = require('express');
var routes = require('js/server/restRoutes');

var server = (function(){

    var app = express(),
		  http = require('http');

    app.use('/', express.static('public'));

	 app.use('/rest/v1', routes);

	 app.listen(3000, function () {
		  console.log('App server listening on port 3000!');
	 });
})();
