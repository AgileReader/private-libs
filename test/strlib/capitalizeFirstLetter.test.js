const strlib = require('./../../src/strlib');

test('capitalizeFirstLetters: empty string', () => {
  expect(strlib.capitalizeFirstLetters('')).toEqual('');
});

test('capitalizeFirstLetters: one word', () => {
  expect(strlib.capitalizeFirstLetters('abc')).toEqual('Abc');
});

test('capitalizeFirstLetters: three words', () => {
  expect(strlib.capitalizeFirstLetters('abc def ghi')).toEqual('Abc Def Ghi');
});
