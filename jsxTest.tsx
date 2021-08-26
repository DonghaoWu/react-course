// // let arr = [1,2,3];
// // arr.forEach((num, i, array) => {
// //     array[i] = num * 2;
// // });

// // console.log(arr);
// // arr.map((num, i, array) => {
// //     array[i] = num * 2;
// // })
// // console.log(arr);

// // arr = arr.map(x => x + 2);
// // console.log(arr);

// // arr.forEach(x => x + 2);
// // console.log(arr);

// // 6/3 -------------------------------------------

// // console.log(this,'======>');
// // // this.x = 9;
// // console.log(this,'======>');
// // const myObj = {
// //     x:81,
// //     getX:function(){
// //         console.log('I am here.', this, this.x)
// //         return this.x;
// //     }
// // };

// // console.log(myObj.getX());
// // const retriveX = myObj.getX;

// // // console.log(retriveX);
// // console.log(retriveX());

// // const foo = function () {
// //     console.log('Normal function:');
// //     console.log(this);
// // }.bind(this);

// // foo();

// // let foo2 = () => {
// //     console.log('Arrow function');
// //     console.log(this);
// // }

// // foo2();

// // class MyPromise {
// //     constructor(cb) {
// //         this.thenCbQueue = [];
// //         this.resolve = function () {
// //             console.log(this)
// //             // const curThenCb = this.thenCbQueue.shift();
// //             // curThenCb(data);
// //         };
// //         this.reject = function () {

// //         };
// //         cb(this.resolve, this.reject);
// //     }

// //     then(thenCb) {
// //         this.thenCbQueue.push(thenCb);
// //     }
// // }

// // const p = new MyPromise((res, rej) => {
// //     res('Hello')
// // })
// //     .then(data => {
// //         console.log(data);
// //     })

// // import React from 'react';

// // interface IButtonProps {
// // }

// // enum BtnSize{
// //   Large='lg',
// //   Small='sm',
// // }
// // const Button: React.FC<IButtonProps> = () => {
// //   let classNameList = String[];

// //   const className = classNameList.join(' ');

// //   return <button>Button</button>;
// // };

// // export default Button;

// import React, { useState } from 'react';
// const App = () => {
//   const [input, setInput] = useState('');

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div>
//       <input value={input} onChange={handleChange} />
//       <div>{input}</div>
//     </div>
//   );
// };

// // --- 8/25 apple
// import React from 'react';
// import classnames from 'classnames';
// // you should import `lodash` as a whole module
// import lodash from 'lodash';
// import axios from 'axios';

// const ITEMS_API_URL = 'https://example.com/api/items';
// const DEBOUNCE_DELAY = 500;

// const mockApiCall = async (query) => {
//   const res = await axios(`${ITEMS_API_URL}?q=${query}`);
//   return res.data;
// }

// // the exported component can be either a function or a class

// export default function Autocomplete({onSelectItem}) {
//   const [userInput, setUserInput] = React.useState('');
//   const [res, setRes] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(false);

//   const timer = React.useRef(null);

//   const handleChange = (e)=>{
//     setUserInput(e.target.value);
//     setRes([]);
//     clearTimeout(timer.current);
//   }

//   React.useEffect(()=>{
//     if(userInput){
//       timer.current = setTimeout(async()=>{
//         setIsLoading(true);
//         const apiData = await mockApiCall(userInput);
//         setRes(apiData);
//         setIsLoading(false);
//       },DEBOUNCE_DELAY)
//     }
//   },[userInput]);

//   const loadingClass = isLoading ? 'is-loading' : null

//   return (
//     <div className="wrapper">
//       <div className={`control ${loadingClass}`}>
//         <input type="text" className="input" value={userInput} onChange={handleChange}/>
//       </div>
//       {
//         res.length?
//           <div className="list is-hoverable">
//             {
//               res.map(el =>{
//                 return <a className='list-item' onClick={()=>onSelectItem(el)}>{el}</a>
//               })
//             }
//           </div>
//           :
//           null
//       }
//     </div>
//   );
// }


// // algo
// function solution(A, B, N) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const countConnected = {};
//   A.forEach(end => {
//       countConnected[end] = (countConnected[end] || 0) + 1;
//   });
//   B.forEach(end => {
//       countConnected[end] = (countConnected[end] || 0) + 1;
//   });
//   let largestConnections = 0;
//   for (let i = 0; i < A.length; i++) {
//       largestConnections = Math.max(
//           largestConnections,
//           countConnected[A[i]] + countConnected[B[i]] - 1
//       );
//   }
//   return largestConnections;
// }


// ----- 8/26 -----·