let arr = [1,2,3];
arr.forEach((num, i, array) => {
    array[i] = num * 2;
});

console.log(arr);
arr.map((num, i, array) => {
    array[i] = num * 2;
})
console.log(arr);

arr = arr.map(x => x + 2);
console.log(arr);

arr.forEach(x => x + 2);
console.log(arr);