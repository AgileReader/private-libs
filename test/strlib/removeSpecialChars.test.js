const strlib = require('../../src/strlib');

test('removeSpecialChars: CR', () => {
  let input = 'a\rb';
  let output = 'ab';
  expect(strlib.removeSpecialChars(input)).toEqual(output);
});

test('removeSpecialChars: multiple CR', () => {
  let input = '\ra\rb\rc\r';
  let output = 'abc';
  expect(strlib.removeSpecialChars(input)).toEqual(output);
});

test('removeSpecialChars: tab', () => {
  let input = '\ta\tb\tc\t';
  let output = ' a b c ';
  expect(strlib.removeSpecialChars(input)).toEqual(output);
});
