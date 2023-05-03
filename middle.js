//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};
// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

const eqArrays = function(array1, array2) {
  if (array1 === array2) {
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

/*assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);*/

const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`Assertion Passed:, ${array1} === ${array2}`);
  } else if (array1 !== array2) {
    console.log(`Assertion Failed:, ${array1} !== ${array2}`);
  }
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);

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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); //=> [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]