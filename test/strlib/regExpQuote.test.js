const strlib = require('./../../src/strlib');

test('regexpQuote: ?[], etc.', () => {
  expect(strlib.regexpQuote('a?')).toEqual('a\\?');
  expect(strlib.regexpQuote('a.')).toEqual('a\\.');
  expect(strlib.regexpQuote('a*')).toEqual('a\\*');
  expect(strlib.regexpQuote('a+')).toEqual('a\\+');
  expect(strlib.regexpQuote('^a')).toEqual('\\^a');
  expect(strlib.regexpQuote('a$')).toEqual('a\\$');
  expect(strlib.regexpQuote('a[]')).toEqual('a\\[\\]');
  expect(strlib.regexpQuote('a{}')).toEqual('a\\{\\}');
  expect(strlib.regexpQuote('a()')).toEqual('a\\(\\)');
});

test('regexpQuote: treat input data as string', () => {
  expect(strlib.regexpQuote(1234)).toEqual('1234');
});
