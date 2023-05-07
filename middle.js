const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
    return;
  } else {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1 !== array2) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i] || array1.length !== array2.length) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`Assertion Passed:, ${array1} === ${array2}`);
  } else if (array1 !== array2) {
    console.log(`Assertion Failed:, ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  let returnMid = [];
  const arrayLength = array.length;
  if (arrayLength > 2) {
    if (arrayLength % 2 === 0) {
      returnMid.push(array[(arrayLength / 2) - 1]);
      returnMid.push(array[arrayLength / 2]);
    } else {
      returnMid.push(array[Math.floor(arrayLength / 2)]);
    }
  }
  return returnMid;
};

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); //=> [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

console.log(assertEqual(middle([1, 2]), []));
console.log(eqArrays(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));

module.exports = middle;