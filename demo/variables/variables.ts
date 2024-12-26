/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
//

const courseName = 'typescript';
const courseName2 = 'typescript';
const courseName3 = `typescript`;

const amount = 10;
const fraction = 10.5;
const oneThousand = 1e3; // 1000 - exponents

const allPermissions = 0o777; // octal
const hexByte = 0xff; // hexadecimal
const binary = 0b0100001; // binary

const bigInt = 9000n; // big integer

const yes = true;
const no = false;

const missing = undefined; // completely missing

const empty = null; // we know it's missing

let someNum = 0;
someNum = 1;
someNum = 2;

// let someNum = 5; // error - cannot redeclare block-scoped variable

{
  let someNum = 5; // shadowing variable - variable's scope is limited to the block and value will be 5
}

// here someNum is 2

let hello; // here hello is undefined
hello = 'hi';
hello = 'hey';
hello = 'hello';

// const whoops; // error - 'const' declarations must be initialized
