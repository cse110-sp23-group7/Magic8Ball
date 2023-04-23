/**
 * @jest-environment jsdom
 */
const {sum, getRandomAnswer} = require("../js/app");

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('getRandomAnswer returns a valid answer', () => {
    const answers = [
        "Yes", "No", "Maybe", "Ask again later", "Outlook not so good", "Cannot predict now"
    ];
    expect(answers).toContain(getRandomAnswer());
});
