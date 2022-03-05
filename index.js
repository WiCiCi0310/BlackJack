let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let cardimgEl = document.getElementById("cardimg-el");
let cardsImgPath = [
  "./Card/2.png",
  "./Card/3.png",
  "./Card/4.png",
  "./Card/5.png",
  "./Card/6.png",
  "./Card/7.png",
  "./Card/8.png",
  "./Card/9.png",
  "10",
  "./Card/A.png",
];
let cards;
let hasBlackjack = false;
let isAlive = false;
let sum;

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 2;
}
function getCardImg(inputCard) {
  if (inputCard != 10) {
    return cardsImgPath[inputCard - 2];
  } else {
    let temp = Math.floor(Math.random() * 3 + 1);
    if (temp === 1) {
      return "./Card/10J.png";
    } else if (temp === 2) {
      return "./Card/10Q.png";
    } else {
      return "./Card/10K.png";
    }
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomNum();
  let secondCard = getRandomNum();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack";
    hasBlackjack = true;
  } else {
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
  }
}
function newCard() {
  if (isAlive && !hasBlackjack) {
    let nextCard = getRandomNum();
    cardimgEl.src = getCardImg(nextCard);
    cards.push(nextCard);
    sum += nextCard;
    renderGame();
  }
}
function reset() {
  cardimgEl.src = "#";
  sum = 0;
  cards = [];
  renderGame();
  isAlive = false;
}
