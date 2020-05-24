//Задание №1

let a = {
    name: 'static',
    count: 0
}

function foo(obj, propName, amount) {
    let arr = [];

    for (let i = 0; i < amount; i++) {
        let newObj = {...obj};
        newObj[propName] = i;
        arr.push(newObj);
    }
    return arr;
}

console.log(foo(a, "count", 10));


//Задание №2


let numbers = [];
let amount = 100;

function getNumber() {
    let random = Math.floor(Math.random() * amount + 1);

    while (true) {
        if (numbers.length === amount) {
            console.log(`Массив полон`);
            return null;
        } else if (!numbers.includes(random)) {
            numbers.push(random);
            return random;
        } else {
            random = Math.floor(Math.random() * amount + 1);
        }
    }
}

for (let i = 0; i < amount; i++) {
    console.log(getNumber());
}
console.log(numbers.sort((a, b) => b - a));


//Задание №3


let student = {
    name: "Иван",
    surname: "Петров",
    age: 19,
    interests: ["программирование", "музыка", "аниме"],
    university: "ИТМО",
    getInfo: function () {
        console.log(`
            ${this.name} ${this.surname}. \n
            ${this.age} лет. \n
            Интересы: ${this.interests.join(', ')}. \n 
            Учится в ${this.university}.    
        `);
    }
}
student.getInfo();


//Задание №4


function factorial(n) {
    if (n <= 0) {
        return false;
    }

    if (n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));


//Задание №5

let arr = [
    {'price': 10, 'count': 2},
    {'price': 5, 'count': 5},
    {'price': 8, 'count': 5},
    {'price': 12, 'count': 4},
    {'price': 8, 'count': 4},
];

console.log(arr.sort((a, b) => a.price - b.price));