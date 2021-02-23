/**
 * Shuffles array in place. ES6 version
 *
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Find unique elements of an array.
 *
 * @param a
 * @returns {any[]}
 */
function arrayUnique(a) {
  /**
   * https://codeburst.io/javascript-array-distinct-5edc93501dc4
   */

  return [...new Set(a)];
}

/**
 * Find difference between two arrays a, b.
 *
 * @param a
 * @param b
 * @returns {*}
 */
function arrayDiff(a, b) {
  /**
   * https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
   */

  return a.filter(x => !b.includes(x));
}

/**
 * Find intersection of two arrays a, b.
 *
 * @param a
 * @param b
 * @returns {*}
 */
function arrayIntersection(a, b) {
  /**
   * https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
   */

  return a.filter(x => b.includes(x));
}

/**
 * Generic conventer.
 *
 * @param array
 * @param elementProcessorFn
 */
function arrayToObj(array, elementProcessorFn) {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    const processed = elementProcessorFn(array[i], result);
    result[processed.key] = processed.value;
  }

  return result;
}

/**
 * Generic converter.
 *
 * @param obj
 * @param keyValueProcessorFn
 * @returns {Array}
 */
function objToArray(obj, keyValueProcessorFn) {
  const result = [];
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    result.push(keyValueProcessorFn(key, value));
  }

  return result;
}

/**
 * Generic converter.
 *
 * @param dict
 * @param keyValueProcessorFn
 * @param compareFn
 * @param elementProcessorFn
 */
function sortObjectProperties(
  dict,
  keyValueProcessorFn,
  compareFn,
  elementProcessorFn,
  filterArrayFn = null,
) {
  const dataToSort = objToArray(dict, keyValueProcessorFn);
  let sorted = dataToSort.sort(compareFn);
  if (filterArrayFn !== null) {
    sorted = sorted.filter(filterArrayFn);
  }
  const result = arrayToObj(sorted, elementProcessorFn);

  return result;
}

/**
 * Find not unique elements of an array.
 *
 * @param a
 * @returns {Array}
 */
function findNotUniqueElements(a) {
  let u = arrayToObjCounter(a);

  let result = [];
  const keys = Object.keys(u);
  const numberOfElements = keys.length;
  for (let i = 0; i < numberOfElements; i++) {
    let key = keys[i];
    let value = u[key];
    if (value > 1) {
      result.push(key);
    }
  }

  return result;
}

/**
 *  Convert array into object with key => number of occurences
 *
 * @param array
 */
function arrayToObjCounter(array) {
  return arrayToObj(array, (element, result) => {
    let toReturn = {
      key: element,
    };
    if (typeof result[element] === 'number') {
      toReturn.value = result[element] + 1;
    } else {
      toReturn.value = 1;
    }
    return toReturn;
  });
}

/**
 * Deep copy obj to obtain new instance.
 *
 * @param obj
 * @returns {any}
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

module.exports = {
  shuffle,
  arrayUnique,
  arrayDiff,
  arrayIntersection,
  arrayToObj,
  objToArray,
  sortObjectProperties,
  findNotUniqueElements,
  arrayToObjCounter,
  deepCopy,
};
