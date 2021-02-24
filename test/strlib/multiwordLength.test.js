const strlib = require('./../../src/strlib');

test('multiwordLength: basic cases', () => {
  let cases = [
    {
      input: '',
      expected: {
        length: '0',
        chunks: [],
      },
    },
    {
      input: 'abc',
      expected: {
        length: '3',
        chunks: [
          'abc',
        ],
      },
    },
    {
      input: 'abc def',
      expected: {
        length: '3-3',
        chunks: [
          'abc',
          'def',
        ],
      },
    },
    {
      input: 'a     b',
      expected: {
        length: '1-1',
        chunks: [
          'a',
          'b',
        ],
      },
    },
    {
      input: 'a bc def',
      expected: {
        length: '1-2-3',
        chunks: [
          'a',
          'bc',
          'def',
        ],
      },
    },
    {
      input: '   a    ',
      expected: {
        length: '1',
        chunks: [
          'a',
        ],
      },
    },
  ];

  cases.forEach(v => {
    expect(strlib.multiwordLength(v.input)).toEqual(v.expected);
  });
});

test('multiwordLength: changed separator', () => {
  str = 'abc def';
  expected = {
    length: '3###3',
    chunks: [
      'abc',
      'def',
    ],
  };
  expect(strlib.multiwordLength(str, '###')).toEqual(expected);
});
