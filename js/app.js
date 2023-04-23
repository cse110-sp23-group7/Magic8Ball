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
function shake() {
    eightBall.classList.add('shake-animation');
    const animationDuration = 1750;
    const framesPerSecond = 30;
    const animationInterval = animationDuration / (framesPerSecond * 2);
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
    setTimeout(showAnswer, animationDuration);
}
function showAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[randomIndex];
    answer.style.opacity = 0;
    answer.style.transition = 'opacity 1s';
    answer.style.opacity = 1;
}
shakeButton.addEventListener('click', shake);

module.exports = {};