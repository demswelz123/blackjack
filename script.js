// let cardEl2 = document.getElementById("card-el2");
// let cardEl3 = document.getElementById("card-el3");

// let firstCard = document.getElementById("card-el1")
// let secondCard = document.getElementById("card-el2")

firstCard = randomCard();
secondCard = randomCard();

let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let blackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function renderGame() {
    cardEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + "  ";
    }
    // cardEl2.textContent = "Card 2: " + secondCard;
    sumEl.textContent = "Sum: " + sum;

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
    let card = randomCard();

    cards.push(card);

    sum += card;

    renderGame();
}

function startGame() {
    renderGame();
}
function randomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1;
    return randomNumer;
}
// let age = 110;

// if(age < 100){
//     console.log(" Not eligible");
// } else if( age === 100){
//     console.log("here is your card");
// } else{
//     console.log("YOU ALREADY HAVE A CARD");
// }

// let messages = [" hi", "how are you"];

// let newMessages = "i`m good";
// messages.splice(1);
// messages.push(newMessages);

// console.log(messages);

// for (let i = 10; i < 101; i += 10) {
//     console.log(i);
// }

// let flooredNumber = math.floor((math.random) * 6) + 1;  [1-5]
// console.log(flooredNumber);

// function rollDice() {
//     let randomNumer = Math.floor(Math.random() * 6) + 1;
//     return randomNumer;
// }
// console.log(rollDice());
