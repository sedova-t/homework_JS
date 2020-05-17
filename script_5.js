//Задание №1

let a = [1, 2, 4];
let b = [1, 2, 3];

function comparison(array1, array2) {
    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                console.log("Массивы отличаются по значениям");
                return false;
            }
        }
        console.log("Массивы совпадают");
        return true;
    } else {
        console.log("Массивы отличаются по длине");
        return false;
    }
}

comparison(a, b);


//Задание №2

function range(arg1, arg2, arg3 = 1) {
    if (arg1 > arg2){
        console.log("Первое число должно быть меньше или равно второму!");
        return false;
    }
    let arr = [];
    for (let i = arg1; i <= arg2; i += arg3){
        arr.push(i);
    }
    return arr;
}
let result = range(1, 20, 4 );
console.log(result);


//Задание №3

let student = {
    name: "Иван",
    surname: "Иванов",
    age: 18,
    interests: ["хоккей", "компьютерные игры", "программирование"],
    university: "ИТМО",
}

function aboutStudent(person) {
    for (let info in person){
        console.log(info + " = " + person[info]);
    }
}
aboutStudent(student);

