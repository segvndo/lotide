const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

function head(arr) {
  if (arr.length === 0) {
    return undefined;
  }else {
    return arr[0];
  }
};
//TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");