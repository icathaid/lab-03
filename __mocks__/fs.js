'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  console.log(file);
  if( file.match(/bad/i) ) {
    cb('invalid file', file);
  }
  else {
    let contents = file.toString().trim();
    cb(undefined, new Buffer(contents));
  }
};