// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const countLetters = function(str) {
  let counter = {};
  const lowercaseStr = str.toLowerCase();
  for (let value of lowercaseStr) {
    if (counter[value] === undefined) {
      counter[value] = 1;
    } else {
      counter[value]++;
    }
  }
  return counter;
};

countLetters("Charlie is a good boy");
console.log(countLetters("Charlie is the best boy"));