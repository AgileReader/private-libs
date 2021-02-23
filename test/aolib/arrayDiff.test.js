const aol = require('./../../src/aolib');

test('arrayDiff: a, b empty', () => {
  expect(aol.arrayDiff([], [])).toEqual([]);
});

test('arrayDiff: a empty', () => {
  expect(aol.arrayDiff([], ['a'])).toEqual([]);
});

test('arrayDiff: b empty', () => {
  expect(aol.arrayDiff(['a', 'b', 'c'], [])).toEqual(['a', 'b', 'c']);
});

test('arrayDiff: abc - bc', () => {
  expect(aol.arrayDiff(['a', 'b', 'c'], ['b', 'c'])).toEqual(['a']);
});
