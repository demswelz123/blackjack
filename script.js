// let cardEl2 = document.getElementById("card-el2");
// let cardEl3 = document.getElementById("card-el3");

// let firstCard = document.getElementById("card-el1")
// let secondCard = document.getElementById("card-el2")

let cards = [];
let sum = 0;
let blackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "Sylph ",
    chips: " 200",
};
playerEl.textContent = player.name + ": $ " + player.chips;

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
        message = "you`re out of the game ";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && blackJack === false) {
        let card = randomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

function startGame() {
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}
function randomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1;

    if (randomNumer > 10) {
        return 10;
    } else if (randomNumer === 1) {
        return 11;
    } else {
        return randomNumer;
    }
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

// and logical
// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution();
// }
// function showSolution() {
//     console.log("showing solution");
// }

// OR logical
// let likeDocumentaries = true;
// let likeStartups = false;
// if (likeDocumentaries === false || likeStartups === false) {
//     recommendMovie();
// }

// function recommendMovie() {
//     console.log(" recommend the movie");
// }
