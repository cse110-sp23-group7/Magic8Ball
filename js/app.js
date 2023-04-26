/** /*
  This file contains the JavaScript code for the Magic-8-Ball application that generates random answers to user input.
  The application uses the Document Object Model (DOM) to manipulate HTML elements on a web page and display the random answers.
  The application includes event listeners that respond to user clicks on a "shake button" element, triggering animations and displaying answers.
  The code is organized into functions for modularity and readability, and uses comments to provide context and explanation for each section.
*/


// Define an array of possible Programming Errors
const answers = [
    `Error: Null pointer dereference`,
    `Error: Off-by-one error`,
    `Error: Division by zero`,
    `Error: Stack overflow`,
    `Error: Buffer overflow`,
    `Error: Race condition`,
    `Error: Logic error`,
    `Error: Syntax error`,
    `Error: Memory leak`,
    `Error: Endless loop`,
    'Error: Type mismatch',
    'Error: Resource contention',
    'Error: File not found',
    'Error: Invalid input',
    'Error: Deadlock',
    'Error: Assertion failure',
    'Error: Floating point error',
    'Error: Out of bounds error',
    'Error: Incorrect data format',
    'Error: Improper error handling'
];

// Get references to DOM elements in <app.html>
const eightBall = document.querySelector('#eight-ball');
const answer = document.querySelector('#answer');
const shakeButton = document.querySelector('#shake-button');

// Define duration of shake animation
const shakeAnimationDuration = 1750;

// When DOM is ready, add click listeners to shakeButton
window.addEventListener("DOMContentLoaded", () => {
    // DOM ready! Images, frames, and other subresources are still downloading.
    shakeButton.addEventListener('click', getAnswer);
    shakeButton.addEventListener('click', shake);
    
});

// Define shake animation
function shake() {
    // Add CSS class to trigger shake animation
    eightBall.classList.add('shake-animation');

    //Define variables for shake animation
    const framesPerSecond = 30;
    const animationInterval = shakeAnimationDuration / (framesPerSecond * 2);
    let currentFrame = 0;
    const animationFrames = [
        'translateX(0)',
        'translateY(-5px)',
        'translateX(-5px)',
        'translateY(5px)',
        'translateX(5px)',
        'translateY(-5px)',
        'translateX(-5px)',
        'translateY(5px)',
        'translateX(5px)',
        'translateY(-5px)',
        'translateX(-5px)',
        'translateY(5px)',
        'translateX(0)'
    ];

    // Animate the shake
    const animationIntervalId = setInterval(() => {
        eightBall.style.transform = animationFrames[currentFrame];
        currentFrame++;
        if (currentFrame === animationFrames.length) {
            clearInterval(animationIntervalId);
        }
    }, animationInterval);
    
}

// Get a random answer from the answers array and display it
function getAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    let retAnswer = answers[randomIndex];
    if (answer) {
        answer.textContent = answers[randomIndex];
        // Fade in the answer
        fadeAnswerIn(0); // Start with opacity 0
    }

    return retAnswer;
}

// Recursive funtion to fade in the answer
function fadeAnswerIn(opacity) {
    const fadeInSpeed = 0.05;
    if (opacity < 1) {
        opacity += fadeInSpeed;
        answer.style.opacity = opacity;
        setTimeout(() => {
            fadeAnswerIn(opacity); // Recursively call until opacity reaches 1
        }, 50);
    }
}

// Export an empty module (presumably for testing purposes)
module.exports = {getAnswer};