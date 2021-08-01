7/30:

1. algo

```js
/*
Case 1:

input:
let arr = [
  {s:0, e:1},
  {s:3, e:5},
  {s:4, e:8},
  {s:10, e:12},
  {s:9, e:10},
];

output: [ { s: 0, e: 1 }, { s: 3, e: 8 }, { s: 9, e: 12 } ]

Case 2:

input:
let arr = [
  {s:0, e:1},
  {s:3, e:5},
  {s:4, e:8},
  {s:10, e:12},
  {s:7, e:10},
];

output: [ { s: 0, e: 1 }, { s: 3, e: 12 } ]
*/

// solution 1:
const arrangeMeetings = (arr) => {
  arr.sort((a, b) => a.s - b.s);

  let res = [{ ...arr[0] }];
  arr.shift();

  while (arr.length) {
    let hasOne = false;
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (res[i].e >= arr[j].s) {
          if (res[i].e <= arr[j].e) {
            res[i].e = arr[j].e;
          }
          arr.shift();
          hasOne = true;
          j--;
        }
      }
    }
    if (!hasOne) {
      res.push({ ...arr[0] });
      arr.shift();
    }
  }
  return res;
};

// solution 2:
const arrangeMeetings2 = (arr) => {
  arr.sort((a, b) => a.s - b.s);

  let res = [{ ...arr[0] }];

  let resIndex = 0;
  let arrIndex = 1;

  while (arrIndex !== arr.length) {
    let hasOne = false;
    let curVar = arr[arrIndex];

    if (res[resIndex].e >= curVar.s) {
      if (res[resIndex].e <= curVar.e) {
        res[resIndex].e = curVar.e;
      }
      arrIndex++;
      hasOne = true;
    }
    if (!hasOne) {
      res.push(curVar);
      arrIndex++;
      resIndex++;
    }
  }
  return res;
};
```

2. 7/30/2021 interview questions:
  - concept question:
    1. GraphQL
    2. jwt  authentication
    3. explain this keyword, what is call, bind, and apply methods?
    4. explain prototype inheritance
    5. class method vs instance method
    6. Constructor Function method vs prototype method
    7. microtask queue vs macrotask queue
    8. Rem vs em
    9. absolute vs relative

  - algorithm question: 
    1. arrange multiple meetings
