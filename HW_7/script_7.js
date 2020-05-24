//Задание №1

function timer() {
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    let date = new Date();

    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();

    hours.style.cssText = "display: inline-block; color: green; border: 1px solid black; width: 20px; padding: 5px";
    minutes.style.cssText = "display: inline-block; color: orange; border: 1px solid black; width: 20px; padding: 5px";
    seconds.style.cssText = "display: inline-block; color: blue; border: 1px solid black; width: 20px; padding: 5px";
}

setInterval(function ()  {
    timer();
}, 1000);


//Задание №2

function showProducts() {

    let arr = [
        {photo: "", art: "asd-001", description: "Молоко пастеризованное - 1%", price: 150},
        {photo: "", art: "asd-002", description: "Молоко пастеризованное - 2%", price: 90},
        {photo: "", art: "asd-003", description: "Молоко пастеризованное - 2.5%", price: 130},
        {photo: "", art: "asd-004", description: "Молоко пастеризованное - 3%", price: 75},
        {photo: "", art: "asd-005", description: "Молоко пастеризованное - 3.4%", price: 199},
    ];

    // arr.sort((a,b) => b.price - a.price);

    let milk = document.querySelector("#milk");

    let html = "";
    for (let i = 0; i < arr.length; i++){
        let item = arr[i];

        html += `
            <div>
                <h1>${item.description}</h1>
                <p>${item.art}</p>
                <img src="${item.photo}" alt="${item.description}">
            </div>     
        `;
    }
    milk.innerHTML = html;
}
showProducts();