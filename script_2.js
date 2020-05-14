//Задача 1

let area = 10;
let areaMeters = area * 100;

let height = 15;
let width = 25;
let square = height * width;

let resuilt = areaMeters%square;
console.log(`У вас осталось ${resuilt} квадратных метров`);


//Задача 2

let oval = 15;
let ovalSquare = oval * 100;
let ovalSmall = 600;

let ring = ovalSquare - ovalSmall;
console.log(`Площадь овального кольца - ${ring} квадратных сантиметров`);


//Задача 3

let a = 40;
let b = 1;
let c = 10;

let max = (a > b) ? ((a > c) ? a : ((b > c) ? b : c)) : ((b > c) ? b : c);
console.log(max);

//________________________________

let max2 = Math.max(a, b, c);
console.log(max2);


//Задача 4

const base = 10;
let m = 16.3;
let n = 4.5;

let closeNumber = (Math.abs(base - m) > Math.abs(base - n)) ? n : m;
console.log(closeNumber);


//Задача 5 (пока не доделана)

let x1 = 1;
let y1 = 2;
let z1 = 3;

let x2 = 3;
let y2 = 5;
let z2 = 7;

let x3 = 4;
let y3 = 6;
let z3 = 8;

let ab = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2) + Math.pow((z2 - z1),2));
let bc = Math.sqrt(Math.pow((x3 - x2),2) + Math.pow((y3 - y2),2) + Math.pow((z3 - z2),2));
let ac = Math.sqrt(Math.pow((x3 - x1),2) + Math.pow((y3 - y1),2) + Math.pow((z3 - z1),2));

