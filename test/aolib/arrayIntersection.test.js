const aol = require('./../../src/aolib');

test('arrayIntersection: a, b empty', () => {
  expect(aol.arrayIntersection([], [])).toEqual([]);
});

test('arrayIntersection: a empty', () => {
  expect(aol.arrayIntersection([], ['a', 'b', 'c'])).toEqual([]);
});

test('arrayIntersection: b empty', () => {
  expect(aol.arrayIntersection(['a', 'b', 'c'], [])).toEqual([]);
});

test('arrayIntersection: abc * cd', () => {
  expect(aol.arrayIntersection(['a', 'b', 'c'], ['c', 'd'])).toEqual(['c']);
});
