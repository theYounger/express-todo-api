const express = require('express');
const app = express();

/*================
======ROUTES======*/
const buzzword = require('./routes/buzzword');

var buzzwords = [];
/*====================
======MIDDLEWARE======*/
app.use(express.static(`public`));
app.use(express.static(`/buzzword`, buzzword));


app.get('/buzzwords', function(req, res) {
  res.send('testing testing');
});
app.post('/reset', function(req, res) {
  res.send('yeah buddy');
});

var server = app.listen(3000, () => {
  var host = 'localhost';
  var port = server.address().port;

  console.log(`Buzzword server listening at http://${host}:`,`${port}`);
});