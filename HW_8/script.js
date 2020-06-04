
//Задание №1

let first = document.querySelector("#first");
first.addEventListener("click", function () {
    this.classList.toggle("active")
})

let second = document.querySelector("#second");
second.addEventListener("click", function () {
    this.classList.toggle("active")
})

let third = document.querySelector("#third");
third.addEventListener("click", function () {
    this.classList.toggle("active")
})


//Задание №2

let counter = document.querySelector("#counter");

counter.addEventListener("click", function () {
    this.innerHTML = +this.innerHTML + 1;
});


//Задание №3

let area = document.querySelector("#text");
let button = document.querySelector("#button");