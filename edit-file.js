'use strict';

const fs = require('fs');

const bill = './files/test.txt';
//  i put my callback out here to keep things straight in my head
const ted = (err, data) => {
  if (err) { console.log('oh no an error in ted', err); }
  else {
    console.log(data);
    // return data;
  }
};

let rando = Math.floor(Math.random() * 100);

const read = (file, callback) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    }
    else { callback(undefined, data); }
  });
};

read(bill, ted);

const addRandomNumber = (file, callback) => {
  read(file, (err, data) => {
    if (err) {
      console.log('oh no an error in addRandomNumber', err);
    }
    else {
      let addRando = data + '   ' + rando;
      callback(undefined, addRando);
    }
  });

};

addRandomNumber(bill, ted);