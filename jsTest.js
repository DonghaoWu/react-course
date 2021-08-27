// // // // // // // // let state = 0;

// // // // // // // // function setState(newState) {
// // // // // // // //   setTimeout(() => {
// // // // // // // //     state = newState;
// // // // // // // //   }, 0);
// // // // // // // // }

// // // // // // // // setState(state + 1);

// // // // // // // // setState(state + 1);

// // // // // // // // setTimeout(() => {
// // // // // // // //   console.log(state);
// // // // // // // // }, 1000);

// // // // // // // // let state = 0;

// // // // // // // // function setState(newState) {
// // // // // // // //   state = newState;
// // // // // // // // }

// // // // // // // // setState(state + 1);

// // // // // // // // setState(state + 1);

// // // // // // // // setTimeout(() => {
// // // // // // // //   console.log(state);
// // // // // // // // }, 1000);

// // // // // // // // console.log(state)

// // // // // // // // ----------8/10-----------

// // // // // // // // function converNumToTime(num) {
// // // // // // // //   let hour = (num - (num % 3600)) / 3600;
// // // // // // // //   if (hour < 10) hour = `0${hour}`;

// // // // // // // //   num = num - 3600 * hour;
// // // // // // // //   let minute = (num - (num % 60)) / 60;
// // // // // // // //   if (minute < 10) minute = `0${minute}`;

// // // // // // // //   let second = num - 60 * minute;
// // // // // // // //   if (second < 10) second = `0${second}`;

// // // // // // // //   return [`${hour}`, `${minute}`, `${second}`];
// // // // // // // // }

// // // // // // // // console.log(converNumToTime(3700));

// // // // // // // // ----------8/11-----------

// // // // // // // // let updateClickCount = (function () {
// // // // // // // //   let counter = 0;
// // // // // // // //   return function () {
// // // // // // // //     ++counter;
// // // // // // // //   };
// // // // // // // // })();

// // // // // // // // // Please point out which is higher order function and callback function.
// // // // // // // // let res = arr.map((el) => {
// // // // // // // //   return el + 1;
// // // // // // // // });

// // // // // // // // // ---
// // // // // // // // // function as parameter, curry function returns a function.
// // // // // // // // function curry(f) {
// // // // // // // //   return function (a) {
// // // // // // // //     return function (b) {
// // // // // // // //       return f(a, b);
// // // // // // // //     };
// // // // // // // //   };
// // // // // // // // }
// // // // // // // // // parameter function
// // // // // // // // function sum(a, b) {
// // // // // // // //   return a + b;
// // // // // // // // }
// // // // // // // // return a new function.
// // // // // // // // let curriedSum = curry(sum);

// // // // // // // // alert(curriedSum(1)(2));

// // // // // // // // // ----
// // // // // // // // const uniqueId = (function () {
// // // // // // // //   let count = 0;
// // // // // // // //   return function () {
// // // // // // // //     ++count;
// // // // // // // //     return `id_${count}`;
// // // // // // // //   };
// // // // // // // // })();
// // // // // // // // console.log(uniqueId());
// // // // // // // // console.log(uniqueId());
// // // // // // // // console.log(uniqueId());

// // // // // // // // ---
// // // // // // // // (function () {
// // // // // // // //   let num = 0;
// // // // // // // //   console.log('this is the start', Date.now());

// // // // // // // //   while (num !== 1000000000) {
// // // // // // // //     num++;
// // // // // // // //   }

// // // // // // // //   setTimeout(function cb() {
// // // // // // // //     console.log(`Callback 1`, Date.now());
// // // // // // // //   }); // has a default time value of 0

// // // // // // // //   console.log('this is just a message', Date.now());

// // // // // // // //   setTimeout(function cb1() {
// // // // // // // //     console.log('Callback 2:', Date.now());
// // // // // // // //   }, 0);

// // // // // // // // //   console.log('this is the end', Date.now());
// // // // // // // // // })();

// // // // // // // // // -------8/12
// // // // // // // // // pure fucntion
// // // // // // // // // function priceAfterTax(productPrice) {
// // // // // // // // //   return productPrice * 0.2 + productPrice;
// // // // // // // // // }
// // // // // // // // // // impure function
// // // // // // // // // let tax = 20;
// // // // // // // // // function calculateTax(productPrice) {
// // // // // // // // //   return productPrice * (tax / 100) + productPrice;
// // // // // // // // // }
// // // // // // // // // // impure function
// // // // // // // // // function getSquare(items) {
// // // // // // // // //   let len = items.length;
// // // // // // // // //   for (let i = 0; i < len; i++) {
// // // // // // // // //     items[i] = items[i] * items[i];
// // // // // // // // //   }
// // // // // // // // //   return items;
// // // // // // // // // }

// // // // // // // // // connect(mapStateToProps, mapDispatchToProps)(UserPage);
// // // // // // // // // withRouter(UserPage);
// // // // // // // // // withStyles(styles)(UserPage);

// // // // // // // // // //withdLoading.js
// // // // // // // // // import React from 'react';
// // // // // // // // // function WithLoading(Component) {
// // // // // // // // //   return function WihLoadingComponent({ isLoading, ...props }) {
// // // // // // // // //     if (!isLoading) return <Component {...props} />;
// // // // // // // // //     return <p>Hold on, fetching data might take some time.</p>;
// // // // // // // // //   };
// // // // // // // // // }
// // // // // // // // // export default WithLoading;

// // // // // // // // // withAuth.js
// // // // // // // // // import React from 'react';
// // // // // // // // // export function withAuth(Component) {
// // // // // // // // //   return class AuthenticatedComponent extends React.Component {
// // // // // // // // //     isAuthenticated() {
// // // // // // // // //       return this.props.isAuthenticated;
// // // // // // // // //     }
// // // // // // // // //     render() {
// // // // // // // // //       const loginErrorMessage = (
// // // // // // // // //         <div>
// // // // // // // // //           Please <a href="/login">login</a> in order to view this part of the
// // // // // // // // //           application.
// // // // // // // // //         </div>
// // // // // // // // //       );
// // // // // // // // //       return (
// // // // // // // // //         <div>
// // // // // // // // //           {this.isAuthenticated === true ? (
// // // // // // // // //             <Component {...this.props} />
// // // // // // // // //           ) : (
// // // // // // // // //             loginErrorMessage
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       );
// // // // // // // // //     }
// // // // // // // // //   };
// // // // // // // // // }
// // // // // // // // // export default withAuth;

// // // // // // // // class App extends React.Component {
// // // // // // // //   names = ['Peter', 'Bruce', 'Clark'];
// // // // // // // //   state = { name: 'Anonymous' };
// // // // // // // //   componentDidMount() {
// // // // // // // //     setInterval(() => {
// // // // // // // //       const name = this.generateName();
// // // // // // // //       this.setState({ name });
// // // // // // // //     }, 1000);
// // // // // // // //   }
// // // // // // // //   generateName = () => {
// // // // // // // //     this.names[Math.floor(Math.random() * this.names.length)];
// // // // // // // //   };
// // // // // // // //   render() {
// // // // // // // //     return <View name={this.state.name} />;
// // // // // // // //   }
// // // // // // // // }
// // // // // // // // // React.memo
// // // // // // // // import { memo } from 'React';
// // // // // // // // const View = memo(({ name }) => `Hi, I'm ${name}`);

// // // // // // // // // --- useRef---

// // // // // // // // import { useRef } from 'react';
// // // // // // // // function LogButtonClicks() {
// // // // // // // //   // mutable, persist, and non-rerender value
// // // // // // // //   const countRef = useRef(0);
// // // // // // // //   const handle = () => {
// // // // // // // //     countRef.current++;
// // // // // // // //     console.log(`Clicked ${countRef.current} times`);
// // // // // // // //   };
// // // // // // // //   console.log('I rendered!');
// // // // // // // //   return <button onClick={handle}>Click me</button>;
// // // // // // // // }

// // // // // // // // // -- useMemo
// // // // // // // // function Button({ name, children }) {
// // // // // // // //   function changeName(name) {
// // // // // // // //     console.log('invoke changeName function.');
// // // // // // // //     return name;
// // // // // // // //   }
// // // // // // // //   // 这一句的意思是，只有当 name 发生变化的时候，才调用 changeName，然后 changeName 返回的值附在变量 newName 上面。
// // // // // // // //   const newName = useMemo(() => changeName(name), [name]);
// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <div>{newName}</div>
// // // // // // // //       <div>{children}</div>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // ------- 8/13 -------
// // // // // // // function foo(n) {
// // // // // // //   if (n == 6) {
// // // // // // //     let num = 2;
// // // // // // //   }
// // // // // // //   // block scope, return: `ReferenceError: num is not defined`
// // // // // // //   console.log(num);
// // // // // // // }
// // // // // // // function foo2(n) {
// // // // // // //   if (n == 6) {
// // // // // // //     var num = 2;
// // // // // // //   }
// // // // // // //   // function scope, return no error.
// // // // // // //   console.log(num);
// // // // // // // }
// // // // // // // foo2(6);

// // // // // // // // call & apply
// // // // // // // let obj = { name: 'Niladri' };
// // // // // // // let greeting = function (a, b, c) {
// // // // // // //   return 'welcome ' + this.name + ' to ' + a + ' ' + b + ' in ' + c;
// // // // // // // };
// // // // // // // let args = ['Newtown', 'KOLKATA', 'WB'];
// // // // // // // console.log(greeting.call(obj, 'Newtown', 'KOLKATA', 'WB'));
// // // // // // // console.log(greeting.apply(obj, args));

// // // // // // // // bind
// // // // // // // let obj = { name: 'Niladri' };
// // // // // // // let greeting = function (a, b, c) {
// // // // // // //   return 'welcome ' + this.name + ' to ' + a + ' ' + b + ' in ' + c;
// // // // // // // };
// // // // // // // //creates a bound function that has same body and parameters
// // // // // // // let bound = greeting.bind(obj);
// // // // // // // console.log(bound('Newtown', 'KOLKATA', 'WB'));

// // // // // // // ---- 8/15

// // // // // // // --- Minimum Deletion Cost to Avoid Repeating Lett

// // // // // // // const minimumDeletionCost = (s, cost) => {
// // // // // // //   let ans = 0;
// // // // // // //   for (let i = 0; i < s.length - 1; i++) {
// // // // // // //     if (s[i] === s[i + 1]) {
// // // // // // //       ans = ans + Math.min(cost[i], cost[i + 1]);
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return ans;
// // // // // // // };

// // // // // // // let s1 = 'abaac';
// // // // // // // let cost1 = [1, 2, 3, 4, 5];
// // // // // // // console.log(minimumDeletionCost(s1, cost1)); // return 3

// // // // // // // let s2 = 'abc';
// // // // // // // let cost2 = [1, 2, 3];
// // // // // // // console.log(minimumDeletionCost(s2, cost2)); // return 0

// // // // // // // let s3 = 'aabaa';
// // // // // // // let cost3 = [1, 2, 3, 4, 1];
// // // // // // // console.log(minimumDeletionCost(s3, cost3)); // return 2

// // // // // // // --- Minimum Deletions to Make Character Frequencies Unique

// // // // // // // const minimumDeletionsToMakeCharFrequenciesUnique = (s) => {
// // // // // // //   let ans = 0;
// // // // // // //   let obj = {};
// // // // // // //   for (let i = 0; i < s.length; i++) {
// // // // // // //     if (!obj[s[i]]) obj[s[i]] = 1;
// // // // // // //     else obj[s[i]]++;
// // // // // // //   }
// // // // // // //   let freArr = [];
// // // // // // //   for (let key in obj) {
// // // // // // //     freArr.push(obj[key]);
// // // // // // //   }
// // // // // // //   freArr.sort((a, b) => b - a);
// // // // // // //   while (freArr.length) {
// // // // // // //     let curEl = freArr.shift();
// // // // // // //     while (freArr.includes(curEl)) {
// // // // // // //       curEl--;
// // // // // // //       ans++;
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return ans;
// // // // // // // };

// // // // // // // let s1 = 'aab';
// // // // // // // console.log(minimumDeletionsToMakeCharFrequenciesUnique(s1)); // return 0

// // // // // // // let s2 = 'aaabbbcc';
// // // // // // // console.log(minimumDeletionsToMakeCharFrequenciesUnique(s2)); // return 2

// // // // // // // let s3 = 'ceabaacb';
// // // // // // // console.log(minimumDeletionsToMakeCharFrequenciesUnique(s3)); // return 2

// // // // // // // Nisum questions
// // // // // // // ----- instance method
// // // // // // // function ReactComponent() {
// // // // // // //   this.render = function () {
// // // // // // //     console.log('rendering');
// // // // // // //   };
// // // // // // // }

// // // // // // // let r1 = new ReactComponent();
// // // // // // // let r2 = new ReactComponent();
// // // // // // // console.log(r1.render === r2.render);

// // // // // // // ----- prototype method
// // // // // // // function ReactComponent() {}
// // // // // // // ReactComponent.prototype.render = function () {
// // // // // // //   console.log('rendering');
// // // // // // // };

// // // // // // // let r3 = new ReactComponent();
// // // // // // // let r4 = new ReactComponent();
// // // // // // // console.log(r3.render === r4.render);

// // // // // // // ES6 static method
// // // // // // // class ClassWithStaticMethod {
// // // // // // //   static staticProperty = 'someValue';
// // // // // // //   static staticMethod() {
// // // // // // //     return 'static method has been called.';
// // // // // // //   }
// // // // // // // }

// // // // // // // --- about function block;
// // // // // // // function block() {
// // // // // // //   outer_block: {
// // // // // // //     inner_block: {
// // // // // // //       console.log('1');
// // // // // // //       break outer_block;
// // // // // // //     }
// // // // // // //     console.log('2');
// // // // // // //   }
// // // // // // // }

// // // // // // // block();

// // // // // // // function block() {
// // // // // // //   outer_block: {
// // // // // // //     inner_block: {
// // // // // // //       console.log('1');
// // // // // // //       break;
// // // // // // //       outer_block;
// // // // // // //     }
// // // // // // //     console.log('2');
// // // // // // //   }
// // // // // // // }

// // // // // // // block();

// // // // // // // --- about Map data structure
// // // // // // // let m = new Map();
// // // // // // // m.set('foo', 42);
// // // // // // // m.set({ cool: true }, 'hello world');

// // // // // // // let it1 = m.entries();
// // // // // // // // console.log(it1)
// // // // // // // it1.next();

// // // // // // // // console.log(it1.next())
// // // // // // // console.log(m)

// // // // // // // --- about call method
// // // // // // // function sum(a, b) {
// // // // // // //   console.log(arguments);
// // // // // // //   let args = Array.prototype.slice.call(arguments);
// // // // // // //   console.log(args);
// // // // // // // }

// // // // // // // sum(4, null);

// // // // // // // let arr = [4, null]

// // // // // // // console.log(arr.slice())

// // // // // // // --- about bind apply & call---
// // // // // // // how to call f() to get output 15
// // // // // // // let x = 10;
// // // // // // // let o = { x: 15 };

// // // // // // // function f() {
// // // // // // //   console.log(this.x);
// // // // // // // }

// // // // // // // f.bind(o)();
// // // // // // // f.call(o, null);//参数分开输入
// // // // // // // f.apply(o, []);//参数集中放在一个数组里面

// // // // // // // --- about instances
// // // // // // // function Point(x, y) {
// // // // // // //   this.x = x;
// // // // // // //   this.y = y;
// // // // // // // }

// // // // // // // let p = new Point(7, 5);
// // // // // // // console.log(p);

// // // // // // // let & var
// // // // // // // var arr = [10, 12, 15, 21];
// // // // // // // for (var i = 0; i < arr.length; i++) {
// // // // // // //   setTimeout(() => {
// // // // // // //     console.log(i, arr[i]);
// // // // // // //   }, 1000);
// // // // // // // }

// // // // // // // -- object reference

// // // // // // // var my = {
// // // // // // //   do: 'dummy',
// // // // // // //   helper: function () {
// // // // // // //     var self = this;
// // // // // // //     console.log('outer func: this.do = ' + this.do);
// // // // // // //     console.log('outer func: self.do = ' + self.do);
// // // // // // //     (function () {
// // // // // // //       // console.log(this)
// // // // // // //       console.log('inner func: this.do = ' + this.do);
// // // // // // //       console.log('inner func: self.do = ' + self.do);
// // // // // // //     })();
// // // // // // //   },
// // // // // // // };

// // // // // // // my.helper();

// // // // // // // -- IIFE
// // // // // // // var output = (function(x){
// // // // // // //   delete x;
// // // // // // //   return x
// // // // // // // }(5))

// // // // // // // console.log(output)

// // // // // // // create an instance from another instance.
// // // // // // // class Employee {}
// // // // // // // var e1 = new Employee();

// // // // // // // // var e2 = new e1.constructor();//TypeError: Cannot read property 'constructor' of undefined
// // // // // // // // var e3 = new e1.prototype.constructor(); //TypeError: Cannot read property 'constructor' of undefined
// // // // // // // // var e4 = e1.constructor.call(); //TypeError: Class constructor Employee cannot be invoked without 'new'

// // // // // // // // console.log(e2);
// // // // // // // // console.log(e3);
// // // // // // // // console.log(e4);
// // // // // // // // console.log(e1.prototype)
// // // // // // // // console.log(e1.constructor);
// // // // // // // var e5 = new e1.constructor.call();
// // // // // // // console.log(e5);

// // // // // // // -- 8/12 walmart questions.

// // // // // // // 1. implement 2 methods
// // // // // // // a. The first method is an async method that waits for 2 seconds before returning. Like a mock api.
// // // // // // // b. The second method will do the following.

// // // // // // // call console.log('start');
// // // // // // // call the first method and wait for it to complete.
// // // // // // // then following completion of the call to the firest method, call console.log('end,time difference ' + temeEleapsed);
// // // // // // // Then run the second method to show it working.

// // // // // // // example: result in the console:

// // // // // // // start
// // // // // // // recieve data(after 2 second)
// // // // // // // end, time elapsed 2000.

// // // // // // // const method1 = () => {
// // // // // // //   return new Promise((res, rej) => {
// // // // // // //     setTimeout(() => {
// // // // // // //       res('recieve data');
// // // // // // //     }, 2000);
// // // // // // //   });
// // // // // // // };

// // // // // // // const method2 = async () => {
// // // // // // //   // phase 1
// // // // // // //   const preTime = Date.now();
// // // // // // //   console.log('phase 1, start');

// // // // // // //   // phase 2
// // // // // // //   const mes = await method1();
// // // // // // //   console.log(`phase 2, return message: ${mes}`);
// // // // // // //   const curTime = Date.now();

// // // // // // //   // phase 3
// // // // // // //   const timeElapsed = curTime - preTime;
// // // // // // //   console.log('phase 3, end, time elapsed ' + timeElapsed);
// // // // // // // };

// // // // // // // method2();

// // // // // // // ------------------8/12 screen questions ------------------
// // // // // // // ------------------8/12 screen questions ------------------
// // // // // // // ------------------8/12 screen questions ------------------

// // // // // // // Q1: Given an array of integers, return an array of integers which contains
// // // // // // // [1st integer, sum of next 2 integers, sum of next 3 integers...]

// // // // // // // example: sumArray([1,6,8,5,9,4,7,2]) ===> [1,14,18,9]
// // // // // // // example: sumArray([1,6,8,5,9,4,7,2,9,10,5]) ===> [1,14,18,28,5]

// // // // // // // const sumArray = (arr) => {
// // // // // // //   let ans = [];
// // // // // // //   let amount = 1;
// // // // // // //   while (arr.length) {
// // // // // // //     let counter = amount;
// // // // // // //     let curSum = 0;
// // // // // // //     while (counter > 0 && arr.length) {
// // // // // // //       let el = arr.shift();
// // // // // // //       curSum += el;
// // // // // // //       counter--;
// // // // // // //     }
// // // // // // //     ans.push(curSum);
// // // // // // //     amount++;
// // // // // // //   }
// // // // // // //   return ans;
// // // // // // // };

// // // // // // // console.log(sumArray([1, 6, 8, 5, 9, 4, 7, 2]));
// // // // // // // console.log(sumArray([1, 6, 8, 5, 9, 4, 7, 2, 9, 10, 5]));

// // // // // // //  Q2:
// // // // // // const persons = [
// // // // // //   {
// // // // // //     name: 'a',
// // // // // //     DOB: '11/28/1989',
// // // // // //     salary: '50000',
// // // // // //   },
// // // // // //   {
// // // // // //     name: 'b',
// // // // // //     DOB: '11/20/1958',
// // // // // //     salary: '40000',
// // // // // //   },
// // // // // //   {
// // // // // //     name: 'c',
// // // // // //     DOB: '10/04/1990',
// // // // // //     salary: '30000',
// // // // // //   },
// // // // // //   {
// // // // // //     name: 'd',
// // // // // //     DOB: '08/25/1986',
// // // // // //     salary: '20000',
// // // // // //   },
// // // // // //   {
// // // // // //     name: 'e',
// // // // // //     DOB: '11/10/1989',
// // // // // //     salary: '10000',
// // // // // //   },
// // // // // //   {
// // // // // //     name: 'f',
// // // // // //     DOB: '09/23/1989',
// // // // // //     salary: '80000',
// // // // // //   },
// // // // // //   {
// // // // // //     name: 'g',
// // // // // //     DOB: '01/09/1986',
// // // // // //     salary: '90000',
// // // // // //   },
// // // // // //   {
// // // // // //     name: 'h',
// // // // // //     DOB: '04/01/1990',
// // // // // //     salary: '50000',
// // // // // //   },
// // // // // // ];

// // // // // // // Find the average salary.
// // // // // // const findAverageSalary = (persons) => {
// // // // // //   let sum = 0;
// // // // // //   for (let i = 0; i < persons.length; i++) {
// // // // // //     sum += Number(persons[i].salary);
// // // // // //   }
// // // // // //   return sum / persons.length;
// // // // // // };

// // // // // // console.log(findAverageSalary(persons));

// // // // // // // Sort on the basic of age in descending order, consider only year for age.
// // // // // // const sortAgeInDescendingOrder = (persons) => {
// // // // // //   let res = [...persons];
// // // // // //   res.sort((a, b) => {
// // // // // //     return new Date(a.DOB).getFullYear() - new Date(b.DOB).getFullYear();
// // // // // //   });
// // // // // //   return res;
// // // // // // };

// // // // // // console.log(sortAgeInDescendingOrder(persons));

// // // // // // // Find people above 32 years, consider only year for age.

// // // // // // const findPeopleAbove32 = (persons) => {
// // // // // //   let ans = persons.filter((el) => {
// // // // // //     return new Date().getFullYear() - new Date(el.DOB).getFullYear() > 32;
// // // // // //   });
// // // // // //   return ans;
// // // // // // };

// // // // // // console.log(findPeopleAbove32(persons));

// // // // // // // Q3: output for the code:

// // // // // // function demoFunc() {
// // // // // //   var name = 'this is Tom.';
// // // // // //   console.log(name); // 'this is Tom.'

// // // // // //   demoFunc2(); // 'this is Tom.'

// // // // // //   function demoFunc2() {
// // // // // //     console.log(name);
// // // // // //   }
// // // // // // }

// // // // // // demoFunc();

// // // // // // // Q4: output for the code:

// // // // // // console.log(myName); //undefined
// // // // // // var myName;

// // // // // // myName = 'Tom';

// // // // // // function displayName(myName) {
// // // // // //   console.log(myName);
// // // // // // }

// // // // // // console.log(myName); //'Tom'
// // // // // // displayName(myName); //'Tom'
// // // // // // displayName(); //undefined

// // // // // // // Q5: Difference between call and apply?

// // // // // // // Q6: class component and function compoennt?

// // // // // // // Q7: What are refs and how do we create them?

// // // // // // // Q8: output for the code:

// // // // // // class Position {
// // // // // //   setGyroPosition(pos) {
// // // // // //     if (pos === null || typeof pos === 'undefined') {
// // // // // //       throw new Error('The position must be defined.');
// // // // // //     }
// // // // // //     this.pos = pos;
// // // // // //   }
// // // // // //   constructor() {
// // // // // //     const randomPosition = MativiModules.MyGyroModule.gyoPosition();
// // // // // //     this.setGyroPosition(randomPosition);
// // // // // //   }
// // // // // // }

// // // // // // // ssh-keygen -o

// // // // // // // cat /Users/donghao/.ssh/id_rsa.pub

// // // // // // // SSH and OPO keys

// // // // // // ---- 8/16 --------------
// // // // // // ---- 8/16 --------------
// // // // // // ---- 8/16 --------------

// // // // // // Domino 8/16:

// // // // // // Q1:
// // // // // // Define a function called sum that takes an array of numbers as its only argument. Return the sum of the number array.
// // // // // // Example: sum([1,2,3,4,5]) => 15

// // // // // const sum = (arr) => {
// // // // //   let ans = 0;
// // // // //   for (let el of arr) {
// // // // //     ans += el;
// // // // //   }
// // // // //   return ans;
// // // // // };

// // // // // console.log(sum([1, 2, 3, 4, 5]));

// // // // // // Q2:
// // // // // // Modify your sum function fromt the previous exercise to check the types of the values in the passed in array.
// // // // // // Return the sum of the numbers present in the array.
// // // // // // Example: sumWithTypeCheck([1,'pizza', 3, 4, {topping:'pepperoni'}]) => 8

// // // // // const sumWithTypeCheck = (arr) => {
// // // // //   let ans = 0;
// // // // //   for (let el of arr) {
// // // // //     if (typeof el === 'number') {
// // // // //       ans += el;
// // // // //     }
// // // // //   }
// // // // //   return ans;
// // // // // };

// // // // // console.log(sumWithTypeCheck([1, 'pizza', 3, 4, { topping: 'pepperoni' }]));

// // // // // // Q3:
// // // // // // Modify your sum function from the previous exercise so that, instead of taking a single array of value,
// // // // // // The function can accept a variable amount of arguments.
// // // // // // Example: sumWithTypeCheck(1,'pizza', 3, 4, {topping:'pepperoni'}) => 8

// // // // // // 注意，这个函数的的定义所不同，使用箭头定义函数是无法获得 arguments 参数的。

// // // // // function sumWithTypeCheckAndNoArray() {
// // // // //   let sum = 0;
// // // // //   let len = arguments.length;
// // // // //   for (var i = 0; i < len; i++) {
// // // // //     if (typeof arguments[i] === 'number') {
// // // // //       sum += arguments[i];
// // // // //     }
// // // // //   }
// // // // //   return sum;
// // // // // }

// // // // // console.log(
// // // // //   sumWithTypeCheckAndNoArray(1, 'pizza', 3, 4, { topping: 'pepperoni' })
// // // // // );

// // // // // // Q4:
// // // // // // Modify your sum function from the previous exercise so that it returns only the sum of arguments whose values are odd numbers.
// // // // // // Example: sumOddNum(2,3,4,5,6) => 8

// // // // // function sumOddNum() {
// // // // //   let sum = 0;
// // // // //   let len = arguments.length;
// // // // //   for (var i = 0; i < len; i++) {
// // // // //     if (typeof arguments[i] === 'number' && arguments[i] % 2 === 1) {
// // // // //       sum += arguments[i];
// // // // //     }
// // // // //   }
// // // // //   return sum;
// // // // // }

// // // // // console.log(sumOddNum(2, 3, 4, 5, 6));

// // // // // // Q5:
// // // // // // Define a function called say that you can invoke like this:
// // // // // // Example: say("Domino's")("Pizza") => "Domino's Pizza";

// // // // // const say = (str1) => (str2) => {
// // // // //   return str1 + ' ' + str2;
// // // // // };

// // // // // console.log(say("Domino's")('Pizza'));

// // // // // // Q6:
// // // // // // Let's says that you've just made an ajax request for the current status of your shopping cart and saved it in a variable cart
// // // // // const cart = {
// // // // //   '14SCREEN': {
// // // // //     Name: 'Large Hand Tossed Pizza',
// // // // //     Qty: 1,
// // // // //     Toppings: ['Pepperoni'],
// // // // //     Price: 10,
// // // // //   },
// // // // //   P12IPAZA: {
// // // // //     Name: 'Medium Pan Pizza',
// // // // //     Qty: 1,
// // // // //     Toppings: ['Onion', 'Spinach'],
// // // // //     Price: 9,
// // // // //   },
// // // // //   B16PBIT: {
// // // // //     Name: 'Parmesan Bread Bites',
// // // // //     Qty: 1,
// // // // //     Toppings: [],
// // // // //     Price: 2.99,
// // // // //   },
// // // // // };

// // // // // // In this exercise, write a functon called formatCartForDisplay that takes that cart object as an argument,
// // // // // // and returns an array containing the name of each item, followed by a comma separated list of toppings.
// // // // // // If the item doesn't have any toppings, replace that list with the string 'No toppings'.
// // // // // // Example: formatCartForDisplay(cart)
// // // // // /* =>
// // // // //     [
// // // // //       'Large Hand Tossed Pizza (Pepperoni)',
// // // // //       'Medium Pan Pizza ('Onion', 'Spinach')',
// // // // //       'Parmesan Bread Bites (No Toppings)'
// // // // //     ]
// // // // // */

// // // // // const formatCartForDisplay = (cart) => {
// // // // //   let ans = [];
// // // // //   for (let key in cart) {
// // // // //     let name = cart[key]['Name'];
// // // // //     let toppings = '';

// // // // //     if (cart[key]['Toppings'].length) {
// // // // //       toppings = cart[key]['Toppings'].join(', ');
// // // // //     } else toppings = 'No Toppings';

// // // // //     let item = `${name} (${toppings})`;
// // // // //     ans.push(item);
// // // // //   }
// // // // //   return ans;
// // // // // };

// // // // // console.log(formatCartForDisplay(cart));

// // // // // // Q7:
// // // // // // We'd like to center this message within its container along both horizontal and vertical axis,
// // // // // // while also centering the message's content alont the vertical axis and implementing the following button styles:

// // // // // // fluid, respinsice design
// // // // // // Default CSS color

// // // // // // Align the inner div along the horizontal and vertical axis
// // // // // // Center the inner div's content
// // // // // // Recreate button styles.

// // // // //---8/16 global payment

// // // // // Q1
// // // // // What is the output of the following code?
// // // // // for (var i = 0; i < 5; i++) {
// // // // //   setTimeout(function log() {
// // // // //     console.log(i);
// // // // //   }, i * 1000);
// // // // // }

// // // // // // 5 5 5 5 5
// // // // // // What if I want 0 1 2 3 4 ?
// // // // // for (let i = 0; i < 5; i++) {
// // // // //   setTimeout(function log() {
// // // // //     console.log(i);
// // // // //   }, i * 1000);
// // // // // }

// // // // // Q2
// // // // // Input: a: [1,3,5,7] b:[2,4,6]
// // // // // Output: median: 4
// // // // // 1, Merge two arrays, then get the median, make sure sort.
// // // // // 2, How to cut down Time Complexity?
// // // // // const findMedian = (arr1, arr2) => {
// // // // //   let newArr = [];
// // // // //   let pointer1 = 0;
// // // // //   let pointer2 = 0;

// // // // //   while (pointer1 !== arr1.length || pointer2 !== arr2.length) {
// // // // //     if (pointer1 === arr1.length) {
// // // // //       newArr = [...newArr, ...arr2.slice(pointer2)];
// // // // //       break;
// // // // //     }
// // // // //     if (pointer2 === arr2.length) {
// // // // //       newArr = [...newArr, ...arr1.slice(pointer1)];
// // // // //       break;
// // // // //     }
// // // // //     if (arr1[pointer1] >= arr2[pointer2]) {
// // // // //       newArr.push(arr2[pointer2]);
// // // // //       pointer2++;
// // // // //     } else if (arr1[pointer1] < arr2[pointer2]) {
// // // // //       newArr.push(arr1[pointer1]);
// // // // //       pointer1++;
// // // // //     }
// // // // //   }
// // // // //   if (newArr.length % 2 === 1) {
// // // // //     return newArr[(newArr.length - 1) / 2];
// // // // //   }
// // // // //   return (newArr[newArr.length / 2] + newArr[newArr.length / 2 - 1]) / 2;
// // // // // };

// // // // // console.log(findMedian([1, 3, 5, 7], [2, 4, 6]));

// // // // // // --- 8/18
// // // // // console.log(counter1); // undefined
// // // // // var counter1 = 1;

// // // // // console.log(counter2); // "ReferenceError: Cannot access 'counter2' before initialization
// // // // // let counter2 = 1;

// // // // // console.log(counter3); // "ReferenceError: Cannot access 'counter3' before initialization
// // // // // const counter3 = 1;

// // // // // // // Function Declarations
// // // // // let x1 = 20;
// // // // // let y1 = 10;

// // // // // let result1 = add1(x1, y1);
// // // // // console.log(result1);

// // // // // function add1(a, b) {
// // // // //   return a + b;
// // // // // }

// // // // // // //Function Expressions
// // // // // let x2 = 20;
// // // // // let y2 = 10;

// // // // // let result2 = add2(x2, y2); //"TypeError: add2 is not a function
// // // // // console.log(result2);

// // // // // var add2 = function (x, y) {
// // // // //   return x + y;
// // // // // };

// // // // // // arrow function
// // // // // let x3 = 20;
// // // // // let y3 = 10;

// // // // // let result3 = add3(x3, y3); //TypeError: add3 is not a function
// // // // // let result4 = add4(x3, y3); //ReferenceError: Cannot access 'add4' before initialization
// // // // // console.log(result3);
// // // // // console.log(result4);

// // // // // var add3 = (x, y) => x + y;
// // // // // const add4 = (x, y) => x + y;

// // // // // // about callback fucntion
// // // // // let numbers = [1, 2, 4, 7, 3, 5, 6];
// // // // // //isOddNumber is a callback function.
// // // // // function isOddNumber(number) {
// // // // //   return number % 2;
// // // // // }
// // // // // const oddNumbers = numbers.filter(isOddNumber);
// // // // // console.log(oddNumbers); // [ 1, 7, 3, 5 ]

// // // // // // --- about closure
// // // // // // example 1:
// // // // // function greeting() {
// // // // //   let message = 'Hi';

// // // // //   function sayHi() {
// // // // //     console.log(message);
// // // // //   }

// // // // //   return sayHi;
// // // // // }
// // // // // let hi = greeting();
// // // // // hi();

// // // // // // example 2:
// // // // // function greeting(message) {
// // // // //   return function (name) {
// // // // //     return message + ' ' + name;
// // // // //   };
// // // // // }
// // // // // let sayHi = greeting('Hi');
// // // // // let sayHello = greeting('Hello');

// // // // // console.log(sayHi('John')); // Hi John
// // // // // console.log(sayHello('John')); // Hello John

// // // // // closure question:
// // // // for (var i = 1; i <= 3; i++) {
// // // //   setTimeout(function () {
// // // //     console.log('after ' + i + ' second(s):' + i);
// // // //   }, i * 1000);
// // // // }

// // // // // after 4 second(s):4
// // // // // after 4 second(s):4
// // // // // after 4 second(s):4

// // // // // The reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure. It remembers the value of i from the last iteration of the loop, which is 4.
// // // // // In addition, all three closures created by the for-loop share the same global scope access the same value of i.

// // // // // To fix this issue, you need to create a new closure scope in each iteration of the loop.
// // // // // solution1:
// // // // //
// // // // for (var index = 1; index <= 3; index++) {
// // // //   (function (index) {
// // // //     setTimeout(function () {
// // // //       console.log('after ' + index + ' second(s):' + index);
// // // //     }, index * 1000);
// // // //   })(index);
// // // // }

// // // // // solution2:
// // // // for (let index = 1; index <= 3; index++) {
// // // //   setTimeout(function () {
// // // //     console.log('after ' + index + ' second(s):' + index);
// // // //   }, index * 1000);
// // // // }

// // // // ----- 8/19

// // // // let arr = ['(', '(', '(', ')', ')', ')'];

// // // // const combination = (arr) => {
// // // //   let res = new Set();
// // // // };

// // // // const helperFunc = (arr, res, ans, curIndex) => {
// // // //   if (ans.length === 6) {
// // // //     res.add(ans);
// // // //   }
// // // //   for (let i = 0; i < arr.length; i++) {
// // // //     ans = ans + arr[i];
// // // //     helperFunc(arr, res, ans);
// // // //   }
// // // // };

// // // // javascript program to prvar all
// // // // combinations of balanced parentheses

// // // // Function that prvar all combinations of
// // // // balanced parentheses
// // // // open store the count of opening parenthesis
// // // // close store the count of closing parenthesis
// // // // function _printParenthesis(str, pos, n, open, close) {
// // // //   if (close == n) {
// // // //     // prvar the possible combinations
// // // //     for (let i = 0; i < str.length; i++) document.write(str[i]);
// // // //     return;
// // // //   } else {
// // // //     if (open > close) {
// // // //       str[pos] = '}';
// // // //       _printParenthesis(str, pos + 1, n, open, close + 1);
// // // //     }
// // // //     if (open < n) {
// // // //       str[pos] = '{';
// // // //       _printParenthesis(str, pos + 1, n, open + 1, close);
// // // //     }
// // // //   }
// // // // }

// // // // // Wrapper over _printParenthesis()
// // // // function printParenthesis(str, n) {
// // // //   if (n > 0) _printParenthesis(str, 0, n, 0, 0);
// // // //   return;
// // // // }

// // // // // Driver program
// // // // var n = 3;
// // // // var str = new Array(2 * n);
// // // // printParenthesis(str, n);

// // // // my solution.
// // // // function generateOne(str, n, open, close, ans) {
// // // //   if (str.length === n * 2) {
// // // //     ans.push(str);
// // // //   } else {
// // // //     if (open > close) {
// // // //       str += ')';
// // // //       generateOne(str, n, open, close + 1, ans);
// // // //     }
// // // //     if (open < n) {
// // // //       console.log(str, '===>');
// // // //       str += '(';
// // // //       generateOne(str, n, open + 1, close, ans);
// // // //     }
// // // //   }
// // // // }

// // // // const combination = (n) => {
// // // //   let ans = [];
// // // //   if (n > 0) generateOne('', n, 0, 0, ans);
// // // //   return ans;
// // // // };

// // // // console.log(combination(2));

// // // // function helper(str, bra_cket, pairs, n) {
// // // //   if (str.length === n) {
// // // //     res.push(str);
// // // //     return;
// // // //   }
// // // //   if (bra_cket > 0) helper(str + ')', bra_cket - 1, pairs, n);
// // // //   if (pairs < n / 2) helper(str + '(', bra_cket + 1, pairs + 1, n);
// // // // }

// // // // const res = [];
// // // // helper('', 0, 0, 4);
// // // // console.log(res);

// // // // // --- pure components
// // // // class ImpureComponent extends React.PureComponent {
// // // //   constructor() {
// // // //     super();
// // // //     this.state = {
// // // //       counter: 0,
// // // //     };

// // // //     // The value of Counter is updated to same value during continues interval
// // // //     setInterval(() => {
// // // //       this.setState({
// // // //         counter: 0,
// // // //       });
// // // //     }, 1000);
// // // //   }

// // // //   render() {
// // // //     // This function wont be re-rendered in case when the new state is same as previous
// // // //     return <b>Counter Value: {this.state.counter}</b>;
// // // //   }
// // // // }

// // // // shallow compared
// // // let userInfo = {
// // //   name: 'Mayank Gupta',
// // //   age: 30,
// // //   designation: 'Developer',
// // // };

// // // let userInfo2 = {
// // //   name: 'Mayank Gupta',
// // //   age: 30,
// // //   designation: 'Developer',
// // // };

// // // let cloneData1 = { ...userInfo };
// // // let cloneData2 = userInfo;

// // // console.log(userInfo == userInfo2); //false
// // // console.log(userInfo == cloneData1); //false
// // // console.log(userInfo == cloneData2); //true

// // // // pure component solution.
// // // class ShalloWCompareComponent extends React.PureComponent {
// // //   constructor() {
// // //     super();
// // //     this.state = {
// // //       userArray: [1, 2, 3, 4, 5],
// // //     };
// // //     setInterval(() => {
// // //       // Here we are creating the new Array Object during setState using "Spread" Operator
// // //       this.setState({
// // //         userArray: [...this.state.userArray, 6],
// // //       });
// // //     }, 1000);
// // //   }
// // //   render() {
// // //     return <b>Array Length is: {this.state.userArray.length}</b>;
// // //   }
// // // }

// // // // React.memo
// // // const Greeting = React.memo((props) => {
// // //   console.log('Greeting Comp render');
// // //   return <h1>Hi {props.name}!</h1>;
// // // });

// // // // render props
// // // import React, { Component } from 'react';

// // // class ProductData extends Component {
// // //   state = {
// // //     products: [],
// // //   };

// // //   componentDidMount() {
// // //     getProducts().then((products) => {
// // //       this.setState({
// // //         products,
// // //       });
// // //     });
// // //   }

// // //   render() {
// // //     return this.props.render({
// // //       products: this.state.products,
// // //     });
// // //   }
// // // }

// // // export { ProductData };

// // // // render props usage:
// // // {
// // //   /* <ProductData
// // //   render={({ products }) => <ProductList products={products} />}
// // // />

// // // <ProductData
// // //   render={({ products }) => <ProductTable products={products} />}
// // // />

// // // <ProductData render={({ products }) => (
// // //   <h1>
// // //       Number of Products:
// // //       <strong>{products.length}</strong>
// // //   </h1>

// // // )} /> */
// // // }

// // // //HOC
// // // // import React, { Component } from "react";

// // // // const withProductData = WrappedComponent =>
// // // //   class ProductData extends Component {
// // // //     state = {
// // // //       products: []
// // // //     };

// // // //     componentDidMount() {
// // // //       getProducts().then(products => {
// // // //         this.setState({
// // // //           products
// // // //         });
// // // //       });
// // // //     }

// // // //     render() {
// // // //       return <WrappedComponent products={this.state.products} />;
// // // //     }
// // // //   };

// // // // export { withProductData };

// // // // 8/19 --- Gulp

// // // // gulp.task('start', ['build'], function () {
// // // //   return nodemon({ script: 'server.js' });
// // // // });

// // // // gulp.task('build', function (callback) {
// // // //   return webpack(config, callback);
// // // // });

// // // // gulp.task('build:watch', function () {
// // // //   return gulp.watch(['src/public/*.js', 'src/views/*html'], ['build']);
// // // // });

// // // // command `npx run gulp`

// // // // ------ 8/20 ------

// // // // ------- 8/24 -----
// // // // function add(...args) {
// // // //   let result = 0;

// // // //   for (let arg of args) result += arg;

// // // //   return result;
// // // // }

// // // // add(1); // returns 1
// // // // add(1, 2); // returns 3
// // // // add(1, 2, 3, 4, 5); // returns 15

// // // // // spread operator
// // // // function add(a, b, c) {
// // // //   return a + b + c;
// // // // }
// // // // const arr = [1, 2, 3];

// // // // add(...arr);

// // // //------ 8/25 -----
// // // // Closer concept
// // // // fixing 5 5 5 5 5 => wrap it inside another Closer function
// // // for (var i = 0; i < 5; i++) {
// // //   wrapper(i);
// // //   function wrapper(input) {
// // //     setTimeout(function () {
// // //       console.log(input);
// // //     }, input * 1000);
// // //   }
// // // }
// // // // Limit amount of time the Callback executing
// // // function fnLimiter(limit, callback) {
// // //   let countLimit = limit;
// // //   return function (...args) {
// // //     if (countLimit === 0) {
// // //       throw new Error('ran out limit');
// // //     } else {
// // //       return callback(...args);
// // //     }
// // //   };
// // // }
// // // const fn = fnLimiter(3, (a, b) => a * b);
// // // fn(2, 6); //12
// // // fn(5, 1); //5
// // // fn(4, 8); //32
// // // fn(1, 5); //error

// // // // implement a function to flat the array to 1D
// // // const arr = [[10, [18, 45, [79]]], 20, [30, 33], 40];
// // // // result: [10,18,45,79,20,30,33,40]
// // // function flat(arr) {
// // //   let result = [];
// // //   helpFlat(arr);
// // //   return result;

// // //   function helpFlat(arr) {
// // //     arr.forEach((item) => {
// // //       if (Array.isArray(item)) {
// // //         helpFlat(item);
// // //       } else {
// // //         result.push(item);
// // //       }
// // //     });
// // //   }
// // // }
// // // // implement Currying function
// // // console.log(mul(2)(3)(4)); //24
// // // function mul(num) {
// // //   return function (num2) {
// // //     return function (num3) {
// // //       return num * num2 * num3;
// // //     };
// // //   };
// // // }

// // // ----- 8/25 -----
// // // SIS test
// // // // // // --- Minimum Deletion Cost to Avoid Repeating Lett

// const minimumDeletionCost = (s, cost) => {
//   if (cost.length === 1) return 0;
//   let ans = 0;

//   let curIndex = 1;
//   let preIndex = 0;

//   while (curIndex <= cost.length) {
//     if (s[preIndex] !== s[curIndex]) {
//       if (curIndex - preIndex > 1) {
//         let tempArr = cost.slice(preIndex, curIndex);
//         let sum = 0;
//         for (let i = 0; i < tempArr.length; i++) {
//           sum += tempArr[i];
//         }
//         sum = sum - Math.max(...tempArr);
//         console.log(tempArr);
//         ans += sum;
//       }
//       preIndex = curIndex;
//     }
//     curIndex++;
//   }
//   return ans;
// };

// let s1 = 'abbaaa';
// let cost1 = [1, 2, 3, 4, 5, 6];
// console.log(minimumDeletionCost(s1, cost1)); // return 11

// let s2 = 'abc';
// let cost2 = [1, 2, 3];
// console.log(minimumDeletionCost(s2, cost2)); // return 0

// let s3 = 'aabaa';
// let cost3 = [1, 2, 3, 4, 1];
// console.log(minimumDeletionCost(s3, cost3)); // return 2

// let s5 = 'aaaaabbbbb';
// let cost5 = [10, 5, 6, 2, 3, 5, 1, 2, 9, 8];
// console.log(minimumDeletionCost(s5, cost5)); // return 16+16 = 32

// // //  --- Minimum Deletions to Make Character Frequencies Unique

// // const minimumDeletionsToMakeCharFrequenciesUnique = (s) => {
// //   let ans = 0;
// //   let obj = {};
// //   for (let i = 0; i < s.length; i++) {
// //     if (!obj[s[i]]) obj[s[i]] = 1;
// //     else obj[s[i]]++;
// //   }
// //   let freArr = [];
// //   for (let key in obj) {
// //     freArr.push(obj[key]);
// //   }
// //   freArr.sort((a, b) => b - a);
// //   while (freArr.length) {
// //     let curEl = freArr.shift();
// //     while (freArr.includes(curEl)) {
// //       curEl--;
// //       ans++;
// //     }
// //   }
// //   return ans;
// // };

// // let s1 = 'aab';
// // console.log(minimumDeletionsToMakeCharFrequenciesUnique(s1)); // return 0

// // let s2 = 'aaabbbcc';
// // console.log(minimumDeletionsToMakeCharFrequenciesUnique(s2)); // return 2

// // let s3 = 'ceabaacb';
// // console.log(minimumDeletionsToMakeCharFrequenciesUnique(s3));

// const string = 'aaabbbcccdddddeeefffggg';
// const str1 = 'aaaabbbccczzzzzzoooooooozzzzzzz';
// function solution(string) {
//   const originalFrequenciesByChar = {};
//   for (let char of string) {
//     originalFrequenciesByChar[char] =
//       (originalFrequenciesByChar[char] || 0) + 1;
//   }
//   const originalFrequencies = Object.values(originalFrequenciesByChar);
//   originalFrequencies.sort((a, b) => b - a);
//   let res = 0;
//   for (let i = 1; i < originalFrequencies.length; i++) {
//     let newFreq = Math.min(
//       originalFrequencies[i - 1] - 1,
//       originalFrequencies[i]
//     );
//     res += originalFrequencies[i] - newFreq;
//     originalFrequencies[i] = newFreq;
//   }
//   return res;
// }
// console.log(solution(str1));

// const minimumDeletionCost = (s, cost) => {
//   if (cost.length === 1) return 0;
//   let ans = 0;

//   let curIndex = 1;
//   let preIndex = 0;

//   while (curIndex <= cost.length) {
//     if (s[preIndex] !== s[curIndex]) {
//       if (curIndex - preIndex > 1) {
//         let tempArr = cost.slice(preIndex, curIndex);
//         let sum = 0;
//         for (let i = 0; i < tempArr.length; i++) {
//           sum += tempArr[i];
//         }
//         sum = sum - Math.max(...tempArr);
//         console.log(tempArr);
//         ans += sum;
//       }
//       preIndex = curIndex;
//     }
//     curIndex++;
//   }
//   return ans;
// };


// ------ 8/26 --- Domino OA
function sumOddNum(...args) {
  let sum = 0;
  let len = args.length;
  for (var i = 0; i < len; i++) {
    if (typeof args[i] === 'number' && args[i] % 2 === 1) {
      sum += args[i];
    }
  }
  return sum;
 }
  
 console.log(sumOddNum(2, 3, 4, 5, 6));