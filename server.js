const express = require('express');
const app = express();
var memory = require('./model/buzzwordMem');
/*================
======ROUTES======*/
const buzzword = require('./routes/buzzword.js');

/*====================
======MIDDLEWARE======*/
app.use(express.static(`public`));
app.use(`/buzzword`, buzzword);


app.get('/buzzwords', function(req, res) {
  res.json(memory.getBuzzwords());
});
app.post('/reset', function(req, res) {
  res.send('yeah buddy');
});

var server = app.listen(3000, () => {
  var host = 'localhost';
  var port = server.address().port;

  console.log(`Buzzword server listening at http://${host}:`,`${port}`);
});