// --- 8/18
// console.log(counter1); //
// var counter1 = 1;

// console.log(counter2); //
// let counter2 = 1;

// console.log(counter3); //
// const counter3 = 1;

// // // Function Declarations
// let x1 = 20;
// let y1 = 10;

// let result1 = add1(x1, y1);
// console.log(result1);

// function add1(a, b) {
//   return a + b;
// }

// // //Function Expressions
// let x2 = 20;
// let y2 = 10;

// let result2 = add2(x2, y2); //
// console.log(result2);

// var add2 = function (x, y) {
//   return x + y;
// };

// // arrow function
// let x3 = 20;
// let y3 = 10;

// // let result3 = add3(x3, y3); //
// let result4 = add4(x3, y3); //
// console.log(result3);
// console.log(result4);

// var add3 = (x, y) => x + y;
// const add4 = (x, y) => x + y;

// // about callback fucntion
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// //isOddNumber is a callback function.
// function isOddNumber(number) {
//   return number % 2;
// }
// const oddNumbers = numbers.filter(isOddNumber);
// console.log(oddNumbers); // [ 1, 7, 3, 5 ]

// // --- about closure
// // example 1:
// function greeting() {
//   let message = 'Hi';

//   function sayHi() {
//     console.log(message);
//   }
//   return sayHi;
// }
// let hi = greeting();
// hi();

// // example 2:
// function greeting(message) {
//   return function (name) {
//     return message + ' ' + name;
//   };
// }
// let sayHi = greeting('Hi');
// let sayHello = greeting('Hello');

// console.log(sayHi('John')); // Hi John
// console.log(sayHello('John')); // Hello John

// // closure question:
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log('after ' + i + ' second(s):' + i);
//   }, i * 1000);
// }

// // after 4 second(s):4
// // after 4 second(s):4
// // after 4 second(s):4

// The reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure. It remembers the value of i from the last iteration of the loop, which is 4.
// In addition, all three closures created by the for-loop share the same global scope access the same value of i.

// To fix this issue, you need to create a new closure scope in each iteration of the loop.
// solution1:
// for (var index = 1; index <= 3; index++) {
//   (function (index) {
//     setTimeout(function () {
//       console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
//   })(index);
// }

// // solution2:
// for (let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log('after ' + index + ' second(s):' + index);
//   }, index * 1000);
// }

// --- 8/18
// function helper (path, ind) {
//   if ending?:
//     do
//     return
//   for (choice of choices) {
//     modify
//     helper(newpath, ind+ 1)
//     revert
//   }
// }

const res = [];
helper('', 0, 0, 4);
console.log(res);

function helper(str, bra_cket, pairs, n) {
  if (str.length === n) {
    res.push(str);
    return;
  }
  if (bra_cket > 0) helper(str + ')', bra_cket - 1, pairs, n);
  if (pairs < n / 2) helper(str + '(', bra_cket + 1, pairs + 1, n);
}
