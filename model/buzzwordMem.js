'use strict';

var memory = function() {
  var buzzwordsArray = {
    buzzwords: []
  };
  var memory = {
    memory: []
  };
  var score = 0;
  return {
    getMemory: function() {
      return memory.memory;
    },
    getBuzzwords: function() {
      return buzzwordsArray;
      // return buzzArray.map(function(ele) {
      //   return ele.buzzWord;
      // });
    },
    setBuzzword: function(word) {
      memory.memory.push(word);
      buzzwordsArray.buzzwords.push(word.buzzWord);
    },
    setScore: function(points) {
      score += points;
    },
    getScore: function() {
      return score;
    }
  };
};

module.exports = memory();