'use strict';

const fs = require('fs');

//  i put my callback and file path out here to keep things straight in my head and reuse them later
const bill = './files/test.txt';
const ted = (err, data) => {
  if (err) { console.log('oh no an error in ted', err); }
  else {
    console.log('data read from file     ', data);
    // i can log out the data asynchronously, but i can't figure out how to return it so i can save it to a variable
    // return data;
  }
};

const rando = Math.floor(Math.random() * 100);

const read = (file, callback) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    }
    else { callback(undefined, data); }
  });
};

const saveFile = (file, callback) => {
  read(file, (err, data) => {
    if (err) {
      console.log('oh no an error in addRandomNumber', err);
    }
    else {
      console.log('data read from file     ', data);
      let addRando = data + '   ' + rando;
      callback(undefined, addRando);
    }
  });
};


let rufus = (err, data) => {
  fs.writeFile(bill, data, (err) => {
    if(err){ console.log('oh no there was an error inside rufus', err);}
    else { console.log('data written to file     ', data); }
  });
};

saveFile(bill, rufus);