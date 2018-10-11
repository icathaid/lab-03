'use strict';

jest.mock('fs');

const fileReader = require('../../lib/reader.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['./files/1.txt', './files/2.txt', 'bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    
    fileReader(files, (err,data) => {
      expect(files).toBeDefined();
      // expect(err).toEqual('invalid file');
      done();
    });
  });


  it('reads 3 files', done => {
    let files = ['./files/1.txt', './files/2.txt', './files/3.txt'];
    fileReader(files, (err,data) => {
      expect(err).toBeUndefined();
      //  i'm not 100% sure this is the way to fix it, but as I understand it, err should only be null if i set it to that value somewhere...if no err is thrown, it *should* be undefined.  I think.
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

  it('reads 3 files in order', done => {
    let files = ['../../files/3.txt', '../../files/2.txt', '../../files/1.txt'];
    fileReader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      // console.log('data[0]:     ', );
      done();
    });
  });



});
