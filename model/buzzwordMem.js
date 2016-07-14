'use strict';

var model = function() {

  var buzzwords = {
    wordArray: []
  };
  var memory = [];
  var score = 0;

  return {
    getMemory: function() {
      return memory;
    },
    getBuzzwords: function() {
      return buzzwords;
    },
    setBuzzword: function(word) {
      memory.push(word);
      buzzwords.wordArray.push(word.buzzWord);
    },
    setScore: function(buzzHeard, points) {
      if(buzzHeard === 'true') {score += parseInt(points);}
      if(buzzHeard === 'false') {score -= parseInt(points);}
    },
    getScore: function() {
      return score;
    },
    deleteBuzzword: function(word) {
      memory.forEach(function(ele, indie, arrie) {
        if(ele.buzzWord === word.buzzWord){delete arrie[indie];}
      });
      buzzwords.wordArray.forEach(function(ele, indie, arrie) {
        if(ele === word.buzzWord){delete arrie[indie];}
      });
    },
    reset: function() {
      memory = [];
      buzzwords.wordArray = [];
      score = 0;
    }
  };
};

module.exports = model();