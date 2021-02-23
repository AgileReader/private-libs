const aol = require('./../../src/aolib');

test('findNotUniqueElements: basic test', () => {
  expect(aol.findNotUniqueElements(['a', 'b', 'c', 'a'])).toEqual(['a']);
});

test('findNotUniqueElements: unique elements', () => {
  expect(aol.findNotUniqueElements(['a', 'b', 'c'])).toEqual([]);
});
