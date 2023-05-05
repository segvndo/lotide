const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:, ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed:, ${actual} !== ${expected}`);
  }
};

//function findKey which takes in an object and a callback. 
//It should scan the object and return the first key for which the callback returns a truthy value. 
//If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  let objKey = Object.keys(object);
  for (let i = 0; i < objKey.length; i++) {
    if (object[objKey[i]]) {
      return objKey[i];
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3}
}), x => x.stars === 3), "Akaleri");