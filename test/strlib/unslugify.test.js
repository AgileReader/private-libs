const strlib = require('./../../src/strlib');

test('unslugify: abc-def-ghijkl', () => {
  let str = 'abc-def-ghijkl';
  let expected = 'Abc Def Ghijkl';

  expect(strlib.unslugify(str)).toEqual(expected);
});
