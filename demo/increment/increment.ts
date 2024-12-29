/* eslint-disable */
import { strict as assert } from 'assert';

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
//

let n = 1;

// "postfix" increment
n++;
assert.equal(n, 2);

// "prefix" increment
++n;
assert.equal(n, 3);

// DIFFERENCE
n = 5;
const k = n++; // k = 5, n = 6
assert.equal(n, 6);
assert.equal(k, 5);

n = 5;
const j = ++n; // j = 6, n = 6
assert.equal(n, 6);
assert.equal(j, 6);

// "postfix" decrement
n = 5;
const t = n--; // t = 5, n = 4
assert.equal(n, 4);
assert.equal(t, 5);

// "prefix" decrement
n = 5;
const s = --n; // s = 4, n = 4
assert.equal(n, 4);
assert.equal(s, 4);

// Arithmetic assignment
n = 5;
n += 5; // n = 10
assert.equal(n, 10);
n -= 5; // n = 5
assert.equal(n, 5);
n *= 5; // n = 25
assert.equal(n, 25);
n /= 5; // n = 5
assert.equal(n, 5);
n %= 5; // n = 0
assert.equal(n, 0);
