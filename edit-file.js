'use strict';

const fs = require('fs');


const bill = './files/test.txt';
const ted = (err, data) => {
  if(err){return err}
  console.log(data);
};


const read = (file, callback) => {
  fs.readFile( file, 'utf8', (err, data) => {
    if(err){
      console.log('GOD DAMMIT JAMES NOTHINGS WORKING RIGHT', err);
    }
    else console.log(data);
  });
};

read(bill, ted);