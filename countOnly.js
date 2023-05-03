// FUNCTION IMPLEMENTATION
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

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (const item of allItems) {
    if (results[item])
      results[item] +=1;
      if (itemsToCount[item] === true) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    console.log(item)
  }
  
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//return an object that can represent the strings found in the input array, and their respective counts
