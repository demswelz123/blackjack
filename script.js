firstCard = 13
secondCard = 8

// let firstCard = document.getElementById("card-el1")
// let secondCard = document.getElementById("card-el2")
let sum = firstCard + secondCard
let blackJack = false
let isAlive = true
let message =""
let messageEl = document.getElementById("message-el")


function startGame(){
    
    if( sum <= 20){
        message =" Do you want to draw another card? "
       
    
    }else if( sum === 21){
        message ="you`ve won congratulations BLACK JACK"
        blackJack = true
    }else{
        message = "you`ve lost "
        isAlive = false
    }

}



messageEl.textContent = message


// let age = 110;

// if(age < 100){
//     console.log(" Not eligible");
// } else if( age === 100){
//     console.log("here is your card");
// } else{
//     console.log("YOU ALREADY HAVE A CARD");
// }
