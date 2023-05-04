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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const eqObjects = function(shirtObject, anotherShirtObject) {
  let key1 = Object.keys(shirtObject);
  let key2 = Object.keys(anotherShirtObject);
  let result = false;
  if (key1.length === key2.length) {
    key1.forEach(element => {
      if (key2.includes(element) && shirtObject[element] === anotherShirtObject[element]) {
        result = true;
      } else if (Array.isArray(shirtObject[element]) && Array.isArray(anotherShirtObject[element])) {
        result = eqArrays(shirtObject[element], anotherShirtObject[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
//assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

// const obj1 = {a: 1, b: 2, c: 3};
// const obj2 = {a: 1, b:0, c: 3};
// assertEqual(eqObjects(obj1, obj2), true);

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {a: 1, b:0, c: 3};
assertObjectsEqual(obj1, obj2);

// const obj3 = {a: 1, b: 2, c: 3};
// const obj4 = {a: 4, b:2, c: 3};
