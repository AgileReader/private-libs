const fs = require('fs');

/**
 * Read and parse one file using parserFn
 *
 * @param filename
 * @param parserFn
 * @returns {Promise<any>}
 */
function fetchDataOneFile(filename, parserFn) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, fileContents) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        const result = {
          fileContents: fileContents,
          fileName: filename,
        };
        if (parserFn) {
          result.parsed = parserFn(fileContents);
        }
        resolve(result);
      }
    });
  });
}

module.exports = {
  fetchDataOneFile,
};
