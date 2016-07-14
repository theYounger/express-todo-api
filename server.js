const express = require('express');
const app = express();
var model = require('./model/buzzwordMem');

/*================
======ROUTES======*/
const buzzword = require('./routes/buzzword.js');
/*================*/

/*====================
======MIDDLEWARE======*/
app.use(express.static(`public`));
app.use(`/buzzword`, buzzword);
/*====================*/

//Retrieves all buzzwords
app.get('/buzzwords', function(req, res) {
  if(req.path !== '/buzzwords') {
    res.status(404).send('Bad path');
  } else {
    res.json(model.getBuzzwords());
  }
});

//Resets the server. All buzzwords are removed and scores reset to 0
app.post('/reset', function(req, res) {
  model.reset();
  res.send({success: true});
});

module.exports = app;