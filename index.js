'use strict';

//Javascript API

exports = module.exports = function () {
  return function(style){
    style.include(__dirname);
  }
};
