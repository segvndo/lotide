const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
    return;
  } else {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};

//TEST CODE
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const tail = function(arr) {
  return arr.slice(1);
};
assertEqual(tail([5, 6, 7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

/*
var arr = ["item 1", "item 2", "item 3", "item 4"];
console.log(_.tail(arr));
*/