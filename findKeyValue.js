const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
    return;
  } else {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(list, value) {
  let genre = Object.keys(list);
  for (let type of genre) {
    if (list[type] === value) {
      return value;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");

// findKeyByValue which takes in an object and a value.
//It should scan object and return the first key which contains given value.
//If no key with that given value is found, then it should return undefined.

module.exports = findKeyByValue;