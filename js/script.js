// script.js
console.log('Hello, World!');

const answers = [
    "Yes", "No", "Maybe", "Ask again later", "Outlook not so good", "Cannot predict now"
];

// User-defined functions (make sure to export on last line)
// --------------------------------------------------------
function sum(a, b) {
    return a + b;
}
function getRandomAnswer() {
    // Generate a random number between 0 and 5
    const randomIndex = Math.floor(Math.random() * 6);
    // Get the answer from the answers array
    return answers[randomIndex];
}

// Document event listeners
// ------------------------
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded')
    const magicBall = document.getElementById('magic-ball');
    const shakeButton = document.getElementById('shake-button');
    const answerText = document.getElementById('answer');

    function updateAnswer() {
        // Display the answer
        answerText.innerHTML = getRandomAnswer();
    }

    // Add event listener for the shake button
    shakeButton.addEventListener('click', updateAnswer);
});

module.exports = {sum, getRandomAnswer};