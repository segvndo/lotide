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

//callback should only be provided one value: The item in the array.

const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    //It should keep going until the callback/predicate returns a truthy value.
    if (callback(array[i])) {
    //will keep collecting items from a provided array until the callback provided returns a truthy value.
      results = array.slice(0, i);
      //.slice to return back end of array into results arr
      return results;
      //return a "slice of the array with elements taken from the beginning."
    }
  }
  return results;
};
  
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.export = takeUntil;