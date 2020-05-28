//Задание №1

function timer() {
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    let date = new Date();

    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();

    hours.style.cssText = "display: inline-block; color: green; border: 1px solid black; width: 20px; padding: 25px; font-size: 20px;" ;
    minutes.style.cssText = "display: inline-block; color: orange; border: 1px solid black; width: 20px; padding: 25px; font-size: 20px;";
    seconds.style.cssText = "display: inline-block; color: blue; border: 1px solid black; width: 20px; padding: 25px; font-size: 20px;";
}

setInterval(function ()  {
    timer();
}, 1000);


//Задание №2

function showProducts() {

    let arr = [
        {photo: "photos/01.jpg", art: "asd-001", description: "Молоко пастеризованное - 1%", price: 150},
        {photo: "photos/02.jpg", art: "asd-002", description: "Кефир домашний - <br> 2%", price: 90},
        {photo: "photos/03.jpg", art: "asd-003", description: "Йогурт натуральный - 2.5%", price: 130},
        {photo: "photos/04.jpg", art: "asd-004", description: "Сметана домашняя - <br> 3%", price: 75},
        {photo: "photos/05.jpg", art: "asd-005", description: "Творог домашний - <br>5%", price: 199},
    ];

    // arr.sort((a,b) => b.price - a.price);

    let milk = document.querySelector("#milk");

    let html = "";
    for (let i = 0; i < arr.length; i++){
        let item = arr[i];

        html += `
            <div class="milk">
                <h1>${item.description}</h1>
                <p>${item.art}</p>
                <img src="${item.photo}" class="photo" alt="${item.description}">
            </div>     
        `;
    }
    milk.innerHTML = html;
}
showProducts();


//Задание №3

let index = 0;
let reverse = false;

function traffic() {
    let sections = document.querySelectorAll(".round");
    sections.forEach(function (element, count) {
        if (count === index){
            element.classList.add("active");
        }else {
            element.classList.remove("active");
        }
    })

    if (index === sections.length - 1 || index === 0){
            reverse = !reverse;
        }
    if (reverse === true){
        index++;
    }else {
        index--;
    }
}
setInterval(function () {
    traffic()
}, 2000);

