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
  if (array1.isArray === array2.isArray) {
    console.log(`Assertion Passed:, ${array1} === ${array2}`);
  } else if (array1.isArray !== array2.isArray) {
    console.log(`Assertion Failed:, ${array1} !== ${array2}`);
  }
};

/*assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);*/

const without = function(source, itemsToRemove) {
  //values of const words are passed into source, and ["lighthouse"] into itemsToRemove
  let remainder = [];
  //receives only those elements from source that are not present in the itemsToRemove array
  for (let i = 0; i < source.length; i++) {
    let noNeed = false;
    for (let j = 0; j <itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        noNeed = true
      }
    }
    if (!noNeed) {
      remainder.push(source[i]);
      noNeed = false
    }
  }
  return remainder;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));