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

let state = 0;

function setState(newState) {
  state = newState;
}

setState(state + 1);

setState(state + 1);

setTimeout(() => {
  console.log(state);
}, 1000);

// console.log(state)
