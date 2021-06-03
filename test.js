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

const foo = function () {
    console.log('Normal function:');
    console.log(this);
}.bind(this);

foo();

let foo2 = () => {
    console.log('Arrow function');
    console.log(this);
}

foo2();