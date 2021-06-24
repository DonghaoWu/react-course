let state = 0;

function setState(newState) {
  setTimeout(() => {
    state = newState;
  }, 0);
}

setState(state + 1);

setState(state + 1);

setTimeout(() => {
  console.log(state);
}, 1000);
