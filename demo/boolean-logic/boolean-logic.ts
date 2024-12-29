/* eslint-disable */
import { strict as assert } from 'assert';

// Boolean logic is a fundamental concept that involves evaluating true/false
// statements. It is a system of logical thought that uses true and false
// values to make deductions or draw conclusions. Boolean logic is used to
// express conditions and make decisions based on the truth or falsehood of
// these conditions.
//

const yes = true;
const no = false;

const age = 18;
const canPurchase = age >= 18; // true
assert.equal(canPurchase, true);

const denyPurchase = age < 18; // false
assert.equal(denyPurchase, false);

const favoriteColor = 'yellow';
// const isFavorite = favoriteColor === 'red'; // false  // This comparison appears to be unintentional because the types '"yellow"' and '"red"' have no overlap.
const isFavorite = favoriteColor === 'yellow'; // true
// assert.equal(isFavorite, true);

const two = 2;
const isThree = 1 + two === 3; // true
assert.equal(isThree, true);

const isNotTen = 1 + two !== 10; // true
assert.equal(isNotTen, true);

/*
  Equality Operators
 
  == (equal to)
  != (not equal to)
  === (strict equal to)
  !== (strict not equal to)
  > (greater than)
  < (less than)
  >= (greater than or equal to)
  <= (less than or equal to)
 */
