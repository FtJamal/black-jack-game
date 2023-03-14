let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
// let playerName = ""
let player = {
    name: "Farya",
    chips: 200
}
console.log(player.name)

let playerEl = document.getElementById("player-el")
playerEl.innerHTML = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.innerHTML = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " "
    }

    sumEl.innerHTML = "Sum: " + sum

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
    messageEl.innerHTML = message
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}