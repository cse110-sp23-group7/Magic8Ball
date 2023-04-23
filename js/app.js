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
const eightBall = document.querySelector('#eight-ball');
const answer = document.querySelector('#answer');
const shakeButton = document.querySelector('#shake-button');
const shakeAnimationDuration = 1750;
window.addEventListener("DOMContentLoaded", () => {
    // DOM ready! Images, frames, and other subresources are still downloading.
    shakeButton.addEventListener('click', getAnswer);
    shakeButton.addEventListener('click', shake);
    
});

function shake() {
    eightBall.classList.add('shake-animation');
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
    const animationIntervalId = setInterval(() => {
        eightBall.style.transform = animationFrames[currentFrame];
        currentFrame++;
        if (currentFrame === animationFrames.length) {
            clearInterval(animationIntervalId);
        }
    }, animationInterval);
    
}

function getAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[randomIndex];

    fadeAnswerIn(0); // Start with opacity 0
}

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


module.exports = {};