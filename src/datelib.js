/**
 * Returns current date/time in filename format
 *
 * @returns {string}
 */
function getCurrentFilename() {
  let now = new Date();

  return (
    now.getFullYear() +
    '-' +
    (now.getMonth() + 1) +
    '-' +
    now.getUTCDate() +
    '-' +
    now.getHours() +
    '-' +
    now.getMinutes() +
    '-' +
    now.getSeconds()
  );
}

module.exports = {
  getCurrentFilename,
};
