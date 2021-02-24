const brandlib = require('./../../src/brandlib');

test('brand: info', () => {
  expect(brandlib.brand('abc', 'v0.1.0')).toEqual('\nAgile Reader v0.1.0 / abc');
});

