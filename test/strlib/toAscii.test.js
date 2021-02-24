const strlib = require('../../src/strlib');

test('toAscii: change utf chars into ASCII', () => {
  let input = '— ’ “ ”';
  let output = '- \' " "';
  expect(strlib.toAscii(input)).toEqual(output);
});
