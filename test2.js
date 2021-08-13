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
// (function () {
//   let num = 0;
//   console.log('this is the start', Date.now());

//   while (num !== 1000000000) {
//     num++;
//   }

//   setTimeout(function cb() {
//     console.log(`Callback 1`, Date.now());
//   }); // has a default time value of 0

//   console.log('this is just a message', Date.now());

//   setTimeout(function cb1() {
//     console.log('Callback 2:', Date.now());
//   }, 0);

//   console.log('this is the end', Date.now());
// })();

// -------8/12
// pure fucntion
// function priceAfterTax(productPrice) {
//   return productPrice * 0.2 + productPrice;
// }
// // impure function
// let tax = 20;
// function calculateTax(productPrice) {
//   return productPrice * (tax / 100) + productPrice;
// }
// // impure function
// function getSquare(items) {
//   var len = items.length;
//   for (var i = 0; i < len; i++) {
//     items[i] = items[i] * items[i];
//   }
//   return items;
// }

// connect(mapStateToProps, mapDispatchToProps)(UserPage);
// withRouter(UserPage);
// withStyles(styles)(UserPage);

// //withdLoading.js
// import React from 'react';
// function WithLoading(Component) {
//   return function WihLoadingComponent({ isLoading, ...props }) {
//     if (!isLoading) return <Component {...props} />;
//     return <p>Hold on, fetching data might take some time.</p>;
//   };
// }
// export default WithLoading;

// withAuth.js
// import React from 'react';
// export function withAuth(Component) {
//   return class AuthenticatedComponent extends React.Component {
//     isAuthenticated() {
//       return this.props.isAuthenticated;
//     }
//     render() {
//       const loginErrorMessage = (
//         <div>
//           Please <a href="/login">login</a> in order to view this part of the
//           application.
//         </div>
//       );
//       return (
//         <div>
//           {this.isAuthenticated === true ? (
//             <Component {...this.props} />
//           ) : (
//             loginErrorMessage
//           )}
//         </div>
//       );
//     }
//   };
// }
// export default withAuth;

class App extends React.Component {
  names = ['Peter', 'Bruce', 'Clark'];
  state = { name: 'Anonymous' };
  componentDidMount() {
    setInterval(() => {
      const name = this.generateName();
      this.setState({ name });
    }, 1000);
  }
  generateName = () => {
    this.names[Math.floor(Math.random() * this.names.length)];
  };
  render() {
    return <View name={this.state.name} />;
  }
}
// React.memo
import { memo } from 'React';
const View = memo(({ name }) => `Hi, I'm ${name}`);
