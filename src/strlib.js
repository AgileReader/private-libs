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

module.exports = {
  capitalizeFirstLetters,
  regexpQuote,
  slugify,
};
