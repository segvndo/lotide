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

const without = function(source, itemsToRemove) {
  //values of const words are passed into source, and ["lighthouse"] into itemsToRemove
  let remainder = [];
  //receives only those elements from source that are not present in the itemsToRemove array
  for (let i = 0; i < source.length; i++) {
    let noNeed = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        noNeed = true;
      }
    }
    if (!noNeed) {
      remainder.push(source[i]);
      noNeed = false;
    }
  }
  return remainder;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(assertEqual(words, ["hello", "world", "lighthouse"]));
console.log(eqArrays(words, ["hello", "world", "lighthouse"]));

module.exports = without;