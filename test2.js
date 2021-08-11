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
let updateClickCount = (function () {
  let counter = 0;
  return function () {
    ++counter;
  };
})();

// Please point out which is higher order function and callback function.
let res = arr.map((el) => {
  return el + 1;
});
