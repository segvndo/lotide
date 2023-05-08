const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

//TEST CODES
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);