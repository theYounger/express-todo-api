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
      score = score + Number(points);
      console.log(Number(points));
    },
    getScore: function() {
      return score;
    },
    deleteBuzzword: function(word) {
      memory.memory.forEach(function(ele, indie, arrie) {
        if(ele.buzzWord === word.buzzWord){
          delete arrie[indie];
        }
      });
      buzzwordsArray.buzzwords.forEach(function(ele, indie, arrie) {
        if(ele === word.buzzWord){
          delete arrie[indie];
        }
      });
    },
    reset: function() {
      memory.memory = [];
      buzzwordsArray.buzzwords = [];
      score = 0;
    }
  };
};

module.exports = memory();