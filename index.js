let firstCard = Math.floor(Math.random() * 10) + 2;

let secondCard = Math.floor(Math.random() * 10) + 2;

let sum = firstCard + secondCard;

let hasBlackJack = false;

if (sum < 21 ){
    console.log("Still playing");
} else if ( sum === 21){
    hasBlackJack = true;
    console.log("Blackjack!");
} else{
    console.log("You lost :(");
}