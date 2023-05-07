const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
    return;
  } else {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};

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
console.log(assertEqual(countLetters("Charlie is the best boy"), "Charlie is the best boy"));
/*{
  c: 1,
  h: 2,
  a: 1,
  r: 1,
  l: 1,
  i: 2,
  e: 3,
  ' ': 4,
  s: 2,
  t: 2,
  b: 2,
  o: 1,
  y: 1
}*/

module.exports = countLetters;