const answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes – definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'Outlook not so good',
    'My sources say no',
    'Very doubtful'
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
    const fadeInSpeed = 0.1;
    if (opacity < 1) {
        opacity += fadeInSpeed;
        answer.style.opacity = opacity;
        setTimeout(() => {
            fadeAnswerIn(opacity); // Recursively call until opacity reaches 1
        }, 100);
    }
}


module.exports = {};