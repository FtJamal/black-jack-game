let firstCard = 10
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


function startGame() {
    renderGame()
}


function renderGame() {
    cardsEl.innerHTML = "cards: " + firstCard + " " + secondCard
    sumEl.innerHTML = "sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a card?"
    } else if (sum === 21) {
        message = "You have got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    console.log(message)
    messageEl.innerHTML = (message)
}

function newCard() {
    let card = 6
    sum += card
    renderGame()
}