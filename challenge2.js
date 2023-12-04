/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */

let nombre = "tom";
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}

greet(nombre);
//
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

// Your code here
let magnifico = 100;
let muymal = 101;
function isOdd(n) {
  if (n % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isOdd(magnifico));
console.log(isOdd(muymal));
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

let count = 0;
let exacto = 15;
function oddsSmallerThan(n) {
  // Your code here

  if (n == 0) {
    return count - 1;
  } else if (n % 2 != 0) {
    n = n - 1;
    count = count + 1;
    return oddsSmallerThan(n);
  } else if (n % 2 == 0) {
    return oddsSmallerThan(n - 1);
  }
}

console.log(oddsSmallerThan(exacto));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

let finito = 3;
let pucito = 10;
function squareOrDouble(n) {
  // Your code here
  // even
  // odd
  if (n % 2 == 0) {
    return n + n;
  } else {
    return n * n;
  }
}
console.log(squareOrDouble(finito));
console.log(squareOrDouble(pucito));
