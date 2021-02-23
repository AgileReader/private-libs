const aol = require('./../../src/aolib');

test('arrayUnique: empty array', () => {
  expect(aol.arrayUnique([])).toEqual([]);
});

test('arrayUnique: array with unique elements', () => {
  expect(aol.arrayUnique(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
});

test('arrayUnique: array with not unique elements', () => {
  expect(aol.arrayUnique(['a', 'b', 'a', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
});
