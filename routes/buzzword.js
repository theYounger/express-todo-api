const express = require('express');
const bodyParser = require('body-parser');

var Router = express.Router();

/*==========================
==========MIDDLEWARE=========
============================*/
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true}));


Router.route('/')
  .post( function(req, res) {
  // Creates a new buzzword object.
  // Returns true if successful else false
  req.body, 'reqbody'
  res.json(req.body);

  })
  .put(function(req, res) {
  // Updates a buzzword.
  // Returns true and the new score if successful
  // otherwise returns just false


  })
  .delete(function(req, res) {
  // Delete a buzzword.
  // Returns true if successful else false

  });

module.exports = Router;