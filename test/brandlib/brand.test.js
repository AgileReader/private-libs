const brand = require('./../../src/brand');

test('brand: info', () => {
  expect(brand.brand('abc', 'v0.1.0')).toEqual('\nAgile Reader v0.1.0 / abc');
});

