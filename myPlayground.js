// const num = 2;

// async function myAsyncPromise() {
//   try {
//     // async function equalFive() {
//     //   try {
//     //     if (num === 1) return 5;
//     //     else throw new Error();
//     //   } catch (error) {
//     //     throw new Error();
//     //   }
//     // }

//     // let res = await equalFive();
//     // let ans = await equalFive();
//     // console.log('========= ans', ans);

//     // return ans;
//     if(num === 1) return 5;
//     else throw new Error();
//   } catch (error) {
//     throw new Error('number is not equal to 1.');
//   }
// }

// function myPromise() {
//   return new Promise((res, rej) => {
//     if (num === 1) res(5);
//     else {
//       rej('number is not equal to 1.');
//     }
//   });
// }

// let elOne = myAsyncPromise();
// // let elTwo = myPromise();
// console.log('elOne ====>, ', elOne);
// // console.log('elTwo ====>, ', elTwo);

// elOne
//   .then((data) => {
//     console.log('elOne data, ', data);
//   })
//   .catch((err) => {
//     console.log('elOne error, ', err.message);
//   });

// ------
const num = 2;

async function myAsyncPromise() {
  try {
    if (num === 1) return 5;
    else throw 'number is not equal to 1.';
  } catch (error) {
    throw error;
  }
}
let P1_async = myAsyncPromise();
console.log('P1_async ====>, ', P1_async);

P1_async.then((data) => {
  console.log('P1_async data, ', data);
}).catch((err) => {
  console.log('P1_async error, ', err);
});

function myPromise() {
  return new Promise((res, rej) => {
    if (num === 1) res(5);
    else {
      rej('number is not equal to 1.');
    }
  });
}

let P2_origin = myPromise();
console.log('P2_origin ====>, ', P2_origin);

P2_origin.then((data) => {
  console.log('P2_origin data, ', data);
}).catch((err) => {
  console.log('P2_origin error, ', err);
});
