// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const port = 3000;

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('.'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
	response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
const listener = app.listen(port, function () {
	console.log('Your app is listening on port ' + listener.address().port);
});
