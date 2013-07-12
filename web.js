var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, fileContents) {
    if (err) {
        throw err; 
    }       

	app.get('/', function(request, response) {
		response.send(fileContents);
	});
	
	var port = process.env.PORT || 5000;
	app.listen(port, function() {
		console.log("Listening on " + port);
	});
});
