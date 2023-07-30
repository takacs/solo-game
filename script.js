// Get the counter element
let currentPlayer = 'player1'
console.log(currentPlayer)
let counterElement = document.getElementById(currentPlayer);
console.log(counterElement)
let counterValue = 0;

// Get all the card elements
const cards = document.querySelectorAll('.card');
const counters = document.querySelectorAll('.counter')

// Add event listeners to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const valueToAdd = parseInt(card.getAttribute('data-value'));

        counterValue += valueToAdd;

        counterElement.textContent = counterValue;
    });
});

// Add event listeners to each card
counters.forEach(counter => {
    counter.addEventListener('click', () => {
        currentPlayer = counter.id
        console.log(currentPlayer)
        console.log(counterElement)
        counterElement = document.getElementById(currentPlayer)
    });
});

