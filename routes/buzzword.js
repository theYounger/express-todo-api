const express = require('express');
const bodyParser = require('body-parser');
var memory = require('../model/buzzwordMem');

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
    if(Object.keys(req.body).length === 3 && !!(req.body.buzzWord) && !!(req.body.points)){
      memory.setBuzzword(req.body);
      res.json({success: true});
    } else {
      res.send('error');
    }
  })
  .put(function(req, res) {
  // Updates a buzzword.
  // Returns true and the new score if successful
  // otherwise returns just false
    var list = memory.getBuzzwords().buzzwords;
    if(list.indexOf(req.body.buzzWord) !== -1) {
      memory.getMemory().forEach(function(ele) {
        if(ele.buzzWord === req.body.buzzWord && req.body.heard) {
          ele.heard = req.body.heard;
          memory.setScore(ele.points);
          console.log(memory.getScore());
        }
        if(ele.buzzWord === req.body.buzzWord && !req.body.heard) {
          ele.heard = req.body.heard;

          memory.setScore('-' + ele.points);
          console.log(memory.getScore());
        }
      });
      res.json({success: true, newScore: memory.getScore()});
    } else {
      res.json({success: false});
    }

  })
  .delete(function(req, res) {
  // Delete a buzzword.
  // Returns true if successful else false
    var list = memory.getBuzzwords().buzzwords;
    if(list.indexOf(req.body.buzzWord) !== -1) {
      memory.deleteBuzzword(req.body);
      res.send({success: true});
    } else {
      res.send({success: false});
    }

  });

module.exports = Router;