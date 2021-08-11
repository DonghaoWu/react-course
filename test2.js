// let state = 0;

// function setState(newState) {
//   setTimeout(() => {
//     state = newState;
//   }, 0);
// }

// setState(state + 1);

// setState(state + 1);

// setTimeout(() => {
//   console.log(state);
// }, 1000);

// let state = 0;

// function setState(newState) {
//   state = newState;
// }

// setState(state + 1);

// setState(state + 1);

// setTimeout(() => {
//   console.log(state);
// }, 1000);

// console.log(state)

// ----------8/10-----------

// function converNumToTime(num) {
//   let hour = (num - (num % 3600)) / 3600;
//   if (hour < 10) hour = `0${hour}`;

//   num = num - 3600 * hour;
//   let minute = (num - (num % 60)) / 60;
//   if (minute < 10) minute = `0${minute}`;

//   let second = num - 60 * minute;
//   if (second < 10) second = `0${second}`;

//   return [`${hour}`, `${minute}`, `${second}`];
// }

// console.log(converNumToTime(3700));

// ----------8/11-----------

// let updateClickCount = (function () {
//   let counter = 0;
//   return function () {
//     ++counter;
//   };
// })();

// // Please point out which is higher order function and callback function.
// let res = arr.map((el) => {
//   return el + 1;
// });

// // ---
// // function as parameter, curry function returns a function.
// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }
// // parameter function
// function sum(a, b) {
//   return a + b;
// }
// return a new function.
// let curriedSum = curry(sum);

// alert(curriedSum(1)(2));

// // ----
// const uniqueId = (function () {
//   let count = 0;
//   return function () {
//     ++count;
//     return `id_${count}`;
//   };
// })();
// console.log(uniqueId());
// console.log(uniqueId());
// console.log(uniqueId());

// ---
(function () {
  let num = 0;
  console.log('this is the start', Date.now());

  while (num !== 1000000000) {
    num++;
  }

  setTimeout(function cb() {
    console.log(`Callback 1`, Date.now());
  }); // has a default time value of 0

  console.log('this is just a message', Date.now());

  setTimeout(function cb1() {
    console.log('Callback 2:', Date.now());
  }, 0);

  console.log('this is the end', Date.now());
})();
