//The map function will return a new array based on the results of the callback function.
const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`Assertion Passed:, ${array1} === ${array2}`);
  } else if (array1 !== array2) {
    console.log(`Assertion Failed:, ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1 !== array2) {
    return false
  } else {
    for(let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i] || array1.length !== array2.length) {
        return false;
      }
    }
    return true;
  }
};

const words = ["ground", "control", "to", "major", "tom", "neither", "often"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
;}

const result1 = map(words, word => word[0]);
assertArraysEqual((result1, [ 'g', 'c', 't', 'm', 't' ]), true);

const result2 = map(words, word => word.length)
assertArraysEqual((result2, [6, 7, 2, 5, 3, 7, 5]), true);