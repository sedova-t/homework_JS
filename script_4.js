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

// Проверить что введенный пароль удовлетворяет
// следующим условиям сложности:
//     - длинна от 9 символов;
// - содержит обязательно английские буквы верхнего и нижнего регистра;
// - содержит более двух цифр;
// - содержит обязательно один из неалфавитных символов (например, !, $, #, %).