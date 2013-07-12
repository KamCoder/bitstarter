var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var fileContents = 'junk';

var out = fs.readFileSync('index.html','utf8', function(err, data){
	if (err) {
    	return console.log(err);
  	}
	fileContents = data;
}

app.get('/', function(request, response) {
  	response.send(fileContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




