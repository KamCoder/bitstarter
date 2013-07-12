var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var fileContents = 'junk';

app.get('/', function(request, response) {
		fileContents = fs.readFileSync('index.html');
	  	response.send(fileContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




