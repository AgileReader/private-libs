const aol = require('./../../src/aolib');

test('arrayToObj: basic test', () => {
  const data = ['a', 'b'];

  const expected = {
    a: 1,
    b: 1,
  };

  let result = aol.arrayToObjCounter(data);

  expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expected));
});

test('arrayToObj: count duplicates', () => {
  const data = ['a', 'b', 'a'];

  const expected = {
    a: 2,
    b: 1,
  };

  let result = aol.arrayToObjCounter(data);

  expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expected));
});

