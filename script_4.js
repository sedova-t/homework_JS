//Задание №1

let number = "98345";
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum = sum + +number[i];
}
console.log(sum);

//Задание №2

let str = "макароны";

let reg = /(а)/gi;

let newStr = str.replace(reg, '$1'.repeat(2));
console.log(newStr);


//Задание №3

let pass = "!123QWerty";
let check = /(?=.*\d.*\d.*\d)(?=.*[!#%$])(?=.*[A-Z])(?=.*[a-z]).{9,}/g.test(pass);
console.log(check);