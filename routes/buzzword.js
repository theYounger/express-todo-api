const express = require('express');
var Router = express.Router();

Router.route('/')
  .post('/', function(req, res) {
  // Creates a new buzzword object.
  // Returns true if successful else false

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

module.exports(Router);