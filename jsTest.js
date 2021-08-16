// // let state = 0;

// // function setState(newState) {
// //   setTimeout(() => {
// //     state = newState;
// //   }, 0);
// // }

// // setState(state + 1);

// // setState(state + 1);

// // setTimeout(() => {
// //   console.log(state);
// // }, 1000);

// // let state = 0;

// // function setState(newState) {
// //   state = newState;
// // }

// // setState(state + 1);

// // setState(state + 1);

// // setTimeout(() => {
// //   console.log(state);
// // }, 1000);

// // console.log(state)

// // ----------8/10-----------

// // function converNumToTime(num) {
// //   let hour = (num - (num % 3600)) / 3600;
// //   if (hour < 10) hour = `0${hour}`;

// //   num = num - 3600 * hour;
// //   let minute = (num - (num % 60)) / 60;
// //   if (minute < 10) minute = `0${minute}`;

// //   let second = num - 60 * minute;
// //   if (second < 10) second = `0${second}`;

// //   return [`${hour}`, `${minute}`, `${second}`];
// // }

// // console.log(converNumToTime(3700));

// // ----------8/11-----------

// // let updateClickCount = (function () {
// //   let counter = 0;
// //   return function () {
// //     ++counter;
// //   };
// // })();

// // // Please point out which is higher order function and callback function.
// // let res = arr.map((el) => {
// //   return el + 1;
// // });

// // // ---
// // // function as parameter, curry function returns a function.
// // function curry(f) {
// //   return function (a) {
// //     return function (b) {
// //       return f(a, b);
// //     };
// //   };
// // }
// // // parameter function
// // function sum(a, b) {
// //   return a + b;
// // }
// // return a new function.
// // let curriedSum = curry(sum);

// // alert(curriedSum(1)(2));

// // // ----
// // const uniqueId = (function () {
// //   let count = 0;
// //   return function () {
// //     ++count;
// //     return `id_${count}`;
// //   };
// // })();
// // console.log(uniqueId());
// // console.log(uniqueId());
// // console.log(uniqueId());

// // ---
// // (function () {
// //   let num = 0;
// //   console.log('this is the start', Date.now());

// //   while (num !== 1000000000) {
// //     num++;
// //   }

// //   setTimeout(function cb() {
// //     console.log(`Callback 1`, Date.now());
// //   }); // has a default time value of 0

// //   console.log('this is just a message', Date.now());

// //   setTimeout(function cb1() {
// //     console.log('Callback 2:', Date.now());
// //   }, 0);

// // //   console.log('this is the end', Date.now());
// // // })();

// // // -------8/12
// // // pure fucntion
// // // function priceAfterTax(productPrice) {
// // //   return productPrice * 0.2 + productPrice;
// // // }
// // // // impure function
// // // let tax = 20;
// // // function calculateTax(productPrice) {
// // //   return productPrice * (tax / 100) + productPrice;
// // // }
// // // // impure function
// // // function getSquare(items) {
// // //   let len = items.length;
// // //   for (let i = 0; i < len; i++) {
// // //     items[i] = items[i] * items[i];
// // //   }
// // //   return items;
// // // }

// // // connect(mapStateToProps, mapDispatchToProps)(UserPage);
// // // withRouter(UserPage);
// // // withStyles(styles)(UserPage);

// // // //withdLoading.js
// // // import React from 'react';
// // // function WithLoading(Component) {
// // //   return function WihLoadingComponent({ isLoading, ...props }) {
// // //     if (!isLoading) return <Component {...props} />;
// // //     return <p>Hold on, fetching data might take some time.</p>;
// // //   };
// // // }
// // // export default WithLoading;

// // // withAuth.js
// // // import React from 'react';
// // // export function withAuth(Component) {
// // //   return class AuthenticatedComponent extends React.Component {
// // //     isAuthenticated() {
// // //       return this.props.isAuthenticated;
// // //     }
// // //     render() {
// // //       const loginErrorMessage = (
// // //         <div>
// // //           Please <a href="/login">login</a> in order to view this part of the
// // //           application.
// // //         </div>
// // //       );
// // //       return (
// // //         <div>
// // //           {this.isAuthenticated === true ? (
// // //             <Component {...this.props} />
// // //           ) : (
// // //             loginErrorMessage
// // //           )}
// // //         </div>
// // //       );
// // //     }
// // //   };
// // // }
// // // export default withAuth;

// // class App extends React.Component {
// //   names = ['Peter', 'Bruce', 'Clark'];
// //   state = { name: 'Anonymous' };
// //   componentDidMount() {
// //     setInterval(() => {
// //       const name = this.generateName();
// //       this.setState({ name });
// //     }, 1000);
// //   }
// //   generateName = () => {
// //     this.names[Math.floor(Math.random() * this.names.length)];
// //   };
// //   render() {
// //     return <View name={this.state.name} />;
// //   }
// // }
// // // React.memo
// // import { memo } from 'React';
// // const View = memo(({ name }) => `Hi, I'm ${name}`);

// // // --- useRef---

// // import { useRef } from 'react';
// // function LogButtonClicks() {
// //   // mutable, persist, and non-rerender value
// //   const countRef = useRef(0);
// //   const handle = () => {
// //     countRef.current++;
// //     console.log(`Clicked ${countRef.current} times`);
// //   };
// //   console.log('I rendered!');
// //   return <button onClick={handle}>Click me</button>;
// // }

// // // -- useMemo
// // function Button({ name, children }) {
// //   function changeName(name) {
// //     console.log('invoke changeName function.');
// //     return name;
// //   }
// //   // 这一句的意思是，只有当 name 发生变化的时候，才调用 changeName，然后 changeName 返回的值附在变量 newName 上面。
// //   const newName = useMemo(() => changeName(name), [name]);
// //   return (
// //     <>
// //       <div>{newName}</div>
// //       <div>{children}</div>
// //     </>
// //   );
// // }

// // ------- 8/13 -------
// function foo(n) {
//   if (n == 6) {
//     let num = 2;
//   }
//   // block scope, return: `ReferenceError: num is not defined`
//   console.log(num);
// }
// function foo2(n) {
//   if (n == 6) {
//     var num = 2;
//   }
//   // function scope, return no error.
//   console.log(num);
// }
// foo2(6);

// // call & apply
// let obj = { name: 'Niladri' };
// let greeting = function (a, b, c) {
//   return 'welcome ' + this.name + ' to ' + a + ' ' + b + ' in ' + c;
// };
// let args = ['Newtown', 'KOLKATA', 'WB'];
// console.log(greeting.call(obj, 'Newtown', 'KOLKATA', 'WB'));
// console.log(greeting.apply(obj, args));

// // bind
// let obj = { name: 'Niladri' };
// let greeting = function (a, b, c) {
//   return 'welcome ' + this.name + ' to ' + a + ' ' + b + ' in ' + c;
// };
// //creates a bound function that has same body and parameters
// let bound = greeting.bind(obj);
// console.log(bound('Newtown', 'KOLKATA', 'WB'));

// ---- 8/15

// --- Minimum Deletion Cost to Avoid Repeating Lett

// const minimumDeletionCost = (s, cost) => {
//   let ans = 0;
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       ans = ans + Math.min(cost[i], cost[i + 1]);
//     }
//   }
//   return ans;
// };

// let s1 = 'abaac';
// let cost1 = [1, 2, 3, 4, 5];
// console.log(minimumDeletionCost(s1, cost1)); // return 3

// let s2 = 'abc';
// let cost2 = [1, 2, 3];
// console.log(minimumDeletionCost(s2, cost2)); // return 0

// let s3 = 'aabaa';
// let cost3 = [1, 2, 3, 4, 1];
// console.log(minimumDeletionCost(s3, cost3)); // return 2

// --- Minimum Deletions to Make Character Frequencies Unique

// const minimumDeletionsToMakeCharFrequenciesUnique = (s) => {
//   let ans = 0;
//   let obj = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!obj[s[i]]) obj[s[i]] = 1;
//     else obj[s[i]]++;
//   }
//   let freArr = [];
//   for (let key in obj) {
//     freArr.push(obj[key]);
//   }
//   freArr.sort((a, b) => b - a);
//   while (freArr.length) {
//     let curEl = freArr.shift();
//     while (freArr.includes(curEl)) {
//       curEl--;
//       ans++;
//     }
//   }
//   return ans;
// };

// let s1 = 'aab';
// console.log(minimumDeletionsToMakeCharFrequenciesUnique(s1)); // return 0

// let s2 = 'aaabbbcc';
// console.log(minimumDeletionsToMakeCharFrequenciesUnique(s2)); // return 2

// let s3 = 'ceabaacb';
// console.log(minimumDeletionsToMakeCharFrequenciesUnique(s3)); // return 2

// Nisum questions
// ----- instance method
// function ReactComponent() {
//   this.render = function () {
//     console.log('rendering');
//   };
// }

// let r1 = new ReactComponent();
// let r2 = new ReactComponent();
// console.log(r1.render === r2.render);

// ----- prototype method
// function ReactComponent() {}
// ReactComponent.prototype.render = function () {
//   console.log('rendering');
// };

// let r3 = new ReactComponent();
// let r4 = new ReactComponent();
// console.log(r3.render === r4.render);

// ES6 static method
// class ClassWithStaticMethod {
//   static staticProperty = 'someValue';
//   static staticMethod() {
//     return 'static method has been called.';
//   }
// }

// --- about function block;
// function block() {
//   outer_block: {
//     inner_block: {
//       console.log('1');
//       break outer_block;
//     }
//     console.log('2');
//   }
// }

// block();

// function block() {
//   outer_block: {
//     inner_block: {
//       console.log('1');
//       break;
//       outer_block;
//     }
//     console.log('2');
//   }
// }

// block();

// --- about Map data structure
// let m = new Map();
// m.set('foo', 42);
// m.set({ cool: true }, 'hello world');

// let it1 = m.entries();
// // console.log(it1)
// it1.next();

// // console.log(it1.next())
// console.log(m)

// --- about call method
// function sum(a, b) {
//   console.log(arguments);
//   let args = Array.prototype.slice.call(arguments);
//   console.log(args);
// }

// sum(4, null);

// let arr = [4, null]

// console.log(arr.slice())

// --- about bind apply & call---
// how to call f() to get output 15
// let x = 10;
// let o = { x: 15 };

// function f() {
//   console.log(this.x);
// }

// f.bind(o)();
// f.call(o, null);//参数分开输入
// f.apply(o, []);//参数集中放在一个数组里面

// --- about instances
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// let p = new Point(7, 5);
// console.log(p);

// let & var
// var arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(i, arr[i]);
//   }, 1000);
// }

// -- object reference

// var my = {
//   do: 'dummy',
//   helper: function () {
//     var self = this;
//     console.log('outer func: this.do = ' + this.do);
//     console.log('outer func: self.do = ' + self.do);
//     (function () {
//       // console.log(this)
//       console.log('inner func: this.do = ' + this.do);
//       console.log('inner func: self.do = ' + self.do);
//     })();
//   },
// };

// my.helper();

// -- IIFE
// var output = (function(x){
//   delete x;
//   return x
// }(5))

// console.log(output)

// create an instance from another instance.
// class Employee {}
// var e1 = new Employee();

// // var e2 = new e1.constructor();//TypeError: Cannot read property 'constructor' of undefined
// // var e3 = new e1.prototype.constructor(); //TypeError: Cannot read property 'constructor' of undefined
// // var e4 = e1.constructor.call(); //TypeError: Class constructor Employee cannot be invoked without 'new'

// // console.log(e2);
// // console.log(e3);
// // console.log(e4);
// // console.log(e1.prototype)
// // console.log(e1.constructor);
// var e5 = new e1.constructor.call();
// console.log(e5);

// -- 8/12 walmart questions.

// 1. implement 2 methods
// a. The first method is an async method that waits for 2 seconds before returning. Like a mock api.
// b. The second method will do the following.

// call console.log('start');
// call the first method and wait for it to complete.
// then following completion of the call to the firest method, call console.log('end,time difference ' + temeEleapsed);
// Then run the second method to show it working.

// example: result in the console:

// start
// recieve data(after 2 second)
// end, time elapsed 2000.

// const method1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('recieve data');
//     }, 2000);
//   });
// };

// const method2 = async () => {
//   // phase 1
//   const preTime = Date.now();
//   console.log('phase 1, start');

//   // phase 2
//   const mes = await method1();
//   console.log(`phase 2, return message: ${mes}`);
//   const curTime = Date.now();

//   // phase 3
//   const timeElapsed = curTime - preTime;
//   console.log('phase 3, end, time elapsed ' + timeElapsed);
// };

// method2();

// ------------------8/12 screen questions ------------------
// ------------------8/12 screen questions ------------------
// ------------------8/12 screen questions ------------------

// Q1: Given an array of integers, return an array of integers which contains
// [1st integer, sum of next 2 integers, sum of next 3 integers...]

// example: sumArray([1,6,8,5,9,4,7,2]) ===> [1,14,18,9]
// example: sumArray([1,6,8,5,9,4,7,2,9,10,5]) ===> [1,14,18,28,5]

// const sumArray = (arr) => {
//   let ans = [];
//   let amount = 1;
//   while (arr.length) {
//     let counter = amount;
//     let curSum = 0;
//     while (counter > 0 && arr.length) {
//       let el = arr.shift();
//       curSum += el;
//       counter--;
//     }
//     ans.push(curSum);
//     amount++;
//   }
//   return ans;
// };

// console.log(sumArray([1, 6, 8, 5, 9, 4, 7, 2]));
// console.log(sumArray([1, 6, 8, 5, 9, 4, 7, 2, 9, 10, 5]));

//  Q2:
const persons = [
  {
    name: 'a',
    DOB: '11/28/1989',
    salary: '50000',
  },
  {
    name: 'b',
    DOB: '11/20/1958',
    salary: '40000',
  },
  {
    name: 'c',
    DOB: '10/04/1990',
    salary: '30000',
  },
  {
    name: 'd',
    DOB: '08/25/1986',
    salary: '20000',
  },
  {
    name: 'e',
    DOB: '11/10/1989',
    salary: '10000',
  },
  {
    name: 'f',
    DOB: '09/23/1989',
    salary: '80000',
  },
  {
    name: 'g',
    DOB: '01/09/1986',
    salary: '90000',
  },
  {
    name: 'h',
    DOB: '04/01/1990',
    salary: '50000',
  },
];

// Find the average salary.
const findAverageSalary = (persons) => {
  let sum = 0;
  for (let i = 0; i < persons.length; i++) {
    sum += Number(persons[i].salary);
  }
  return sum / persons.length;
};

console.log(findAverageSalary(persons));

// Sort on the basic of age in descending order, consider only year for age.
const sortAgeInDescendingOrder = (persons) => {
  let res = [...persons];
  res.sort((a, b) => {
    return new Date(a.DOB).getFullYear() - new Date(b.DOB).getFullYear();
  });
  return res;
};

console.log(sortAgeInDescendingOrder(persons));

// Find people above 32 years, consider only year for age.

const findPeopleAbove32 = (persons) => {
  let ans = persons.filter((el) => {
    return new Date().getFullYear() - new Date(el.DOB).getFullYear() > 32;
  });
  return ans;
};

console.log(findPeopleAbove32(persons));

// Q3: output for the code:

function demoFunc() {
  var name = 'this is Tom.';
  console.log(name); // 'this is Tom.'

  demoFunc2(); // 'this is Tom.'

  function demoFunc2() {
    console.log(name);
  }
}

demoFunc();

// Q4: output for the code:

console.log(myName); //undefined
var myName;

myName = 'Tom';

function displayName(myName) {
  console.log(myName);
}

console.log(myName); //'Tom'
displayName(myName); //'Tom'
displayName(); //undefined

// Q5: Difference between call and apply?

// Q6: class component and function compoennt?

// Q7: What are refs and how do we create them?

// Q8: output for the code:

class Position {
  setGyroPosition(pos) {
    if (pos === null || typeof pos === 'undefined') {
      throw new Error('The position must be defined.');
    }
    this.pos = pos;
  }
  constructor() {
    const randomPosition = MativiModules.MyGyroModule.gyoPosition();
    this.setGyroPosition(randomPosition);
  }
}

// ssh-keygen -o

// cat /Users/donghao/.ssh/id_rsa.pub 

// SSH and OPO keys