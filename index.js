var express = require('express');
var app = express();

var server = app.listen(3000, () => {
  var host = 'localhost';
  var port = server.address().port;

  console.log(`Buzzword server listening at http://${host}:`,`${port}`);
});