/**
 * Capitalize first letter
 *
 * @param str
 * @returns {string}
 */
function capitalizeFirstLetters(str) {
  let splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');
}

/**
 * Quote RegExp special chars
 *
 * @param s
 * @returns {string}
 */
function regexpQuote(s) {
  return s
    .toString()
    .replace('?', '\\?')
    .replace('+', '\\+')
    .replace('.', '\\.')
    .replace('*', '\\*')
    .replace('^', '\\^')
    .replace('$', '\\$')
    .replace('[', '\\[')
    .replace(']', '\\]')
    .replace('{', '\\{')
    .replace('}', '\\}')
    .replace('(', '\\(')
    .replace(')', '\\)');
}

/**
 * Slugify string
 *
 * @param s
 * @returns {string}
 */
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '');
}

/**
 * Converts slug into capitalized string.
 * Example:
 *     "abc-defgh" => "Abc Defgh"
 * @param s
 * @returns {string}
 */
function unslugify(s) {
  let tmp = s.replace(/_/g, ' ').replace(/-/g, ' ').replace(/ +/g, ' ');

  return capitalizeFirstLetters(tmp);
}

/**
 * For string containing spaces return dash separated lengths of substrings.
 * Example:
 *     "a bc def" => "1-2-3
 *
 * @param str
 * @param separator
 * @returns {{chunks: string[], length: string}|{chunks: (never|string)[], length: string}|{chunks: Array, length: string}}
 */
function multiwordLength(str, separator = '-') {
  let s = str.trim();
  if (s === '') {
    return {
      length: '0',
      chunks: [],
    };
  }

  let chunks = s.split(/ +/);
  if (chunks.length < 2) {
    return {
      length: s.length.toString(),
      chunks: [s],
    };
  }

  let digits = [];
  chunks.map(v => {
    digits.push(v.length);
  });

  return {
    length: digits.join(separator),
    chunks: chunks,
  };
}

/**
 * Convert utf-8 special chars into ASCII equivalents.
 *
 * Converted chars:
 *   - Quotation marks
 *   - Dashes
 *   - Apostrophes
 *
 * @param input
 * @returns {string}
 */
function toAscii(input) {
  let output = input.replace(/—/gu, '-');
  // prettier-ignore
  output = output.replace(/’/gu, '\'');
  output = output.replace(/“/gu, '"');
  output = output.replace(/”/gu, '"');

  return output;
}

/**
 * Remove special chars:
 *   - tabulator
 *   - catrridge return
 *
 * @param input
 * @returns {string}
 */
function removeSpecialChars(input) {
  let output = input.replace(/\r/g, '');
  output = output.replace(/\t/g, ' ');

  return output;
}

/**
 * Get chunks of filename after stripping prefix.
 *
 * @param s
 * @param prefix
 * @returns {string[]}
 */
function filenameChunks(s, prefix) {
  return s.replace(prefix, '').split('/');
}

module.exports = {
  capitalizeFirstLetters,
  regexpQuote,
  slugify,
  multiwordLength,
  toAscii,
  removeSpecialChars,
  unslugify,
  filenameChunks,
};
