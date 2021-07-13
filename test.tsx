// let arr = [1,2,3];
// arr.forEach((num, i, array) => {
//     array[i] = num * 2;
// });

// console.log(arr);
// arr.map((num, i, array) => {
//     array[i] = num * 2;
// })
// console.log(arr);

// arr = arr.map(x => x + 2);
// console.log(arr);

// arr.forEach(x => x + 2);
// console.log(arr);


// 6/3 -------------------------------------------

// console.log(this,'======>');
// // this.x = 9;
// console.log(this,'======>');
// const myObj = {
//     x:81,
//     getX:function(){
//         console.log('I am here.', this, this.x)
//         return this.x;
//     }
// };

// console.log(myObj.getX());
// const retriveX = myObj.getX;

// // console.log(retriveX);
// console.log(retriveX());

// const foo = function () {
//     console.log('Normal function:');
//     console.log(this);
// }.bind(this);

// foo();

// let foo2 = () => {
//     console.log('Arrow function');
//     console.log(this);
// }

// foo2();

// class MyPromise {
//     constructor(cb) {
//         this.thenCbQueue = [];
//         this.resolve = function () {
//             console.log(this)
//             // const curThenCb = this.thenCbQueue.shift();
//             // curThenCb(data);
//         };
//         this.reject = function () {

//         };
//         cb(this.resolve, this.reject);
//     }

//     then(thenCb) {
//         this.thenCbQueue.push(thenCb);
//     }
// }

// const p = new MyPromise((res, rej) => {
//     res('Hello')
// })
//     .then(data => {
//         console.log(data);
//     })

import React from 'react';

interface IButtonProps {
}

enum BtnSize{
  Large='lg',
  Small='sm',
}
const Button: React.FC<IButtonProps> = () => {
  let classNameList = String[];

  const className = classNameList.join(' ');

  return <button>Button</button>;
};

export default Button;