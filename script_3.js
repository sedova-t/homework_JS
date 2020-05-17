//Задача 1

let a = [12, 4, 3, 10, 1, 20];
let b = [-3, -7, -100, -33];

let c = a.concat(b);
console.log(c);

let d = b.concat(a);
console.log(d);


//Задача 3

let arr1 = [12, 4, 3, 10, 1, 20];

let arrMax = Math.max(...arr1);
let index = arr1.indexOf(arrMax);
arr1.splice(index, 1);
console.log(arr1);

let arrMin = Math.min(...arr1);
let index2 = arr1.indexOf(arrMin);
arr1.splice(index2, 1);
console.log(arr1);


