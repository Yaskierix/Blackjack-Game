let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame(){
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
      cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "You've got Blackjack!";
  hasBlackJack = true;
} else {
  message = "You're out of the game!";
  isAlive = false;
}

messageEl.textContent = message;
}

function getRandomCard(){
  let randomCard = Math.floor(Math.random() * 10) + 2;
  return randomCard;
}

function newCard(){
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
}
