const strlib = require('./../../src/strlib');

test('filenameChunks: a/bb/ccc/dddd.txt', () => {
  let str = './../a/bb/ccc/dddd.txt';
  let prefix = './../a/';

  let result = [
    'bb',
    'ccc',
    'dddd.txt',
  ];

  expect(strlib.filenameChunks(str, prefix)).toEqual(result);
});
