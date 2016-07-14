const express = require('express');
const bodyParser = require('body-parser');
var model = require('../model/buzzwordMem');

var Router = express.Router();

/*==========================
==========MIDDLEWARE========*/
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true}));
/*==========================*/

Router.route('/')
  // Creates a new buzzword object.
  // Returns true if successful else false
  .post( function(req, res) {
    if(Object.keys(req.body).length === 3 && !!(req.body.buzzWord) && !!(req.body.points)){
      model.setBuzzword(req.body);
      res.json({success: true});
    } else {
      res.send('error');
    }
  })
  // Updates a buzzword.
  // Returns true and the new score if successful
  // otherwise returns just false
  .put(function(req, res) {
    var list = model.getBuzzwords().wordArray;
    if(list.indexOf(req.body.buzzWord) !== -1) {
      model.getMemory().forEach(function(ele) {
        if(ele.buzzWord === req.body.buzzWord) {
          console.log('reqbodyheard', req.body.heard);
          model.setScore(req.body.heard, ele.points);
          ele.heard = req.body.heard;
        }
      });
      res.json({success: true, newScore: model.getScore()});
    } else {
      res.json({success: false});
    }

  })
  // Delete a buzzword.
  // Returns true if successful else false
  .delete(function(req, res) {
    var list = model.getBuzzwords().wordArray;
    if(list.indexOf(req.body.buzzWord) !== -1) {
      model.deleteBuzzword(req.body);
      res.send({success: true});
    } else {
      res.send({success: false});
    }

  });

module.exports = Router;