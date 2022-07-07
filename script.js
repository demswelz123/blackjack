// let cardEl2 = document.getElementById("card-el2");
// let cardEl3 = document.getElementById("card-el3");

// let firstCard = document.getElementById("card-el1")
// let secondCard = document.getElementById("card-el2")

firstCard = 13;
secondCard = 1;
cards: [firstCard, secondCard];
let sum = firstCard + secondCard;
let blackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + cards[0] + " - " + card[1];
    // cardEl2.textContent = "Card 2: " + secondCard;

    if (sum < 20) {
        message = " Do you want to draw another card? ";
    } else if (sum === 21) {
        message = "you`ve won congratulations BLACK JACK";
        blackJack = true;
    } else {
        message = "you`ve lost ";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = 5;

    sum += card;

    renderGame();
}

function startGame() {
    renderGame();
}
// let age = 110;

// if(age < 100){
//     console.log(" Not eligible");
// } else if( age === 100){
//     console.log("here is your card");
// } else{
//     console.log("YOU ALREADY HAVE A CARD");
// }

let messages = [" hi", "how are you"];

let newMessages = "i`m good";
messages.splice(1);
messages.push(newMessages);

console.log(messages);
