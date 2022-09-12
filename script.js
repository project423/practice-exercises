// 1. Return the Sum of Two Numbers

// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

function addition(a, b) {
  return a + b;
}

// 2. Area of a Triangle

// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50

function triArea(base, height) {
  return (base * height) / 2;
}

// 3. Convert Minutes into Seconds

// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

function convert(minutes) {
  return minutes * 60;
}

// 4. Buggy Code (Part 1)

// cubes(3) ➞ 27

// cubes(5) ➞ 125

// cubes(10) ➞ 1000

function cubes(a) {
  return a ** 3;
}

// 5. Find the Perimeter of a Rectangle

// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22

function findPerimeter(length, width) {
  return 2 * (length + width);
}

// 6. Bitwise Operations

// bitwiseAND(6, 23) ➞ 00000110

// bitwiseOR(6, 23) ➞ 00010111

// bitwiseXOR(6, 23) ➞ 00010001

function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

// 7. Return the Remainder from Two Numbers

// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

function remainder(x, y) {
  return x % y;
}

// 8. How Much is True?

// Create a function which returns the number of true values there are in an array.

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function countTrue(arr) {
  return arr.filter(el => el).length;
}

// 9. Power Calculator

// Create a function that takes voltage and current and returns the calculated power.

// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600

function circuitPower(voltage, current) {
  return voltage * current;
}

// 10. A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

// function redundant(str) {
//    return () => str;
// }

// const f1 = redundant("apple");

// 11 Return the First Element in An Array

// 12 Create a function that takes an array containing only numbers and return the first element.

// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

function getFirstValue(arr) {
  const [firstEl] = arr;
  return firstEl;
}

// console.log(getFirstValue([1, 2, 3]));

// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

// RegEx Exercise: An empty string

// 13 Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

function giveMeSomething(a) {
  return `something ${a}`;
}

// 14 Corect the Mistakes

// squared(5) ➞ 25

// squared(9) ➞ 81

// squared(100) ➞ 10000

function squared(b) {
  return b * b;
}

// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// 15 Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

function lessThan100(a, b) {
  return a + b < 100;
}

// 16 Tile Teamwork Tactics

// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

function possibleBonus(a, b) {
  if (a === b) return false;
  return b - a <= 6 && a < b;
}

// 17 Basic Variable Assignment

// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"

function nameString(name) {
  const b = "Edabit";
  const result = `${name}${b}`;

  return result;
}

// 18 Buggy Code (Part 7)

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"

// swap(100, 200) ➞ [200, 100]

// swap(44, 33) ➞ [33, 44]

// swap(21, 12) ➞ [12, 21]

// function swap(a, b) {
//     let temp = a;
//     a = b;
//     b =  temp;
//     return [a, b];
// }

// 19 Using the "&&" Operator

// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false

function and(a, b) {
  return a && b;
}

// 20 Buggy Code (Part 5)

// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

function printArray(number) {
  const newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

// 20 Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.


function sevenBoom(arr) {
  return arr.toString().includes(7) ? "Boom!" : "there is no 7 in the array";
}



// 21 Return the Next Number from the Integer Passed

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

function addition(num) {
    return num + 1
}


