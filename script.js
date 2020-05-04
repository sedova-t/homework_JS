//Задача 1

let month = 10;
if (month === 12 || month === 1 || month === 2) {
    console.log("Зима");
} else if (month === 3 || month === 4 || month === 5) {
    console.log("Весна");
} else if (month === 6 || month === 7 || month === 8) {
    console.log("Лето");
} else if (month === 9 || month === 10 || month === 11) {
    console.log("Осень");
} else {
    console.error("Выберите месяц от 1 до 12!");
}



//Задача 2

let distance = 200;
let units = 2;
if (typeof distance != "number" || typeof units != "number") {
    console.error("Введите длину отрезка и меру длины!")
} else if (units === 1) {
    console.log(`Длина вашего отрезка ${distance}дм = ${distance * 0.1} метров`);
} else if (units === 2) {
    console.log(`Длина вашего отрезка ${distance}км = ${distance * 1000} метров`);
} else if (units === 3) {
    console.log(`Длина вашего отрезка ${distance}м = ${distance} метров`);
} else if (units === 4) {
    console.log(`Длина вашего отрезка ${distance}мм = ${distance * 0.001} метров`);
} else if (units === 5) {
    console.log(`Длина вашего отрезка ${distance}cм = ${distance * 0.01} метров`);
} else {
    console.error("Параметры не найдены");
}


//Задача 3

let num = -134;

if (num >= -999 && num <= -100) {
    console.log(`${num} - отрицательное трехзначное число`);
} else if (num >= -99 && num <= -10) {
    console.log(`${num} - отрицательное двузначное число`);
} else if (num >= -9 && num <= -1) {
    console.log(`${num} - отрицательное однозначное число`);
} else if (num === 0) {
    console.log(`${num} - нулевое число`);
} else if (num <= 1 && num >= 9) {
    console.log(`${num} - положительное однозначное число`);
} else if (num <= 10 && num >= 99) {
    console.log(`${num} - положительное двузначное число`);
} else if (num <= 100 && num >= 999) {
    console.log(`${num} - положительное трехзначное число`);
} else {
    console.error("Выберите число в диапазоне от -999 до 999");
}



//Задача 4

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} - threeFive`);
    } else if (i % 3 == 0) {
        console.log(`${i} - three`);
    } else if (i % 5 == 0) {
        console.log(`${i} - five`);
    }
}



//Задача 4

let year = 2000;
if (year%4 === 0){
    if (year%100 === 0){
        if (year%400 === 0){
            console.log(`${year} год является високосным`);
        } else {
            console.log(`${year} год не является високосным`);
        }
    }else {
        console.log(`${year} год является високосным`);
    }
}else {
    console.log(`${year} год не является високосным`);
}



//Задача 4

let amountOfPlates  = 2;
let amountOfLiquid = 5;

for (; amountOfPlates >= 0; amountOfPlates--){
    console.log(`У вас осталось ${amountOfPlates} тарелок и ${amountOfLiquid} жидкости`);
    if (amountOfPlates <= 0 || amountOfLiquid <= 0){
        break
    }
    amountOfLiquid = amountOfLiquid - 0.5;
}



