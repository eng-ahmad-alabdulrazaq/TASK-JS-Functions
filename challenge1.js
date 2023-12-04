/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
let name = "ahmad";
function printName(name) {
  console.log(`${name}`);
}

printName(name);
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
let age = 28;
function printAge(age) {
  console.log(`${age}`);
}
printAge(age);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
let name1 = "ahmad";
let language = "en";

function printHello(n1, lan) {
  if (lan == "en") {
    console.log(`Hello ${n1}`);
  } else if (lan == "es") {
    console.log(`Hola ${n1}`);
  } else if (lan == "fr") {
    console.log(`Bonjour ${n1}`);
  } else if (lan == "tr") {
    console.log(`Merhaba ${n1}`);
  }
}

printHello(name1, language);
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

let unomas = 100;
let dosmas = 500;

function printMax(uno, dos) {
  if (uno > dos) {
    return uno;
  } else {
    return dos;
  }
}

console.log(printMax(unomas, dosmas));
