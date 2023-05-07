const countLetters = require("./countLetters");

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

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (let letter of sentence) {
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
    i++;
  }
  return results;
};

console.log(letterPositions("hello"));
console.log(eqArrays(letterPositions("hello"), false))
assertArraysEqual(letterPositions("hello").h, [3]);
assertArraysEqual(letterPositions("hello").e, [2]);
countLetters(letterPositions("Hello"));

module.exports = letterPositions;