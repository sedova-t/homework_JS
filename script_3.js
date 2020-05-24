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

//Задача №5

let arr2 = [2,7,4,-1,18,0];

while (true){
    if (arr2.length === 1) {
        console.log(arr2[0]);
        break;
    }

    let max1 = Math.max(...arr2);
     arr2.splice(arr2.indexOf(max1), 1);

    let max2 = Math.max(...arr2);
    arr2.splice(arr2.indexOf(max2), 1);

    let result = (max1 > max2)? max1 - max2: max2 - max1;
    if (result !== 0) {
        arr2.push(result);
    }
}
