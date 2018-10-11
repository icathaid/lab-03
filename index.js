'use strict';

const fileReader = require('./lib/reader.js');

// Obtain and assert input
// let files = process.argv.slice(2);
let files = ['./files/1.txt', './files/2.txt', './files/4.txt'];
if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});



