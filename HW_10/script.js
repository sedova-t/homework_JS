
//Задание №1

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Basket {
    #products = [];
    #amountOfProducts = 0;
    #totalPrice = 0;

    addProduct(item) {
        this.#products.push(item);
        this.#amountOfProducts = this.#products.length;
        this.#totalPrice = this.#products.reduce((a, b) => a + b.price, 0);
    }

    getTotalPrice() {
        return this.#totalPrice;
    }
    getAmountOfProducts() {
        return this.#amountOfProducts;
    }
}

let basket1 = new Basket();
let product1 = new Product('milk1', 100);
let product2 = new Product('milk2', 150);
let product3 = new Product('milk3', 200);

basket1.addProduct(product1);
basket1.addProduct(product2);
basket1.addProduct(product3);

console.log(basket1.getTotalPrice());
console.log(basket1.getAmountOfProducts());


//Задача №2


class Human {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    getFullInfo(){
        return  `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. 
        Интересы: ${this.interests.join(", ")}.`;
    }
}

class Student extends Human{
    constructor(name, age, gender, interests, university) {
        super(name, age, gender, interests);
        this.university = university;
    }
    getFullInfo(){
        return  `Студент: ${this.name}. Возраст: ${this.age}. Пол: ${this.gender}. 
        Интересы: ${this.interests.join(", ")}. Обучается в ${this.university}.`;
    }
}

let firstStudent = new Student(
    "Иван",
    25,
    "м",
    ["музыка", "программирование"],
    "ИТМО"
);
console.log(firstStudent.getFullInfo());


//Задача №3

class User{
    constructor(name, age) {
        if (!name){
            this.getAnonymousInfo();
        } else {
            let data1 = {name, age};
            this.getUserInfo(data1);
        }
    }
    getUserName(){
        return `Имя пользователя: ${this.name}`
    }
    getAnonymousInfo(){
        this.name = 'Аноним';
    }
    getUserInfo(data){
        this.name = data.name;
        this.age = data.age;
    }
}
let user1 = new User("john", 21);
let user2 = new User();
console.log(user1.getUserName());
console.log(user2.getUserName());