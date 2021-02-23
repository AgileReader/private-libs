const strlib = require('./../../src/strlib');

test('slugify: basic test', () => {
  expect(strlib.slugify(' ___ A b. c, d   e\'"f" -- ')).toEqual('a-b-c-d-e-f');
});
