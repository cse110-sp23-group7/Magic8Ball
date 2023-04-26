/**
 * @jest-environment jsdom
 */
const {getAnswer} = require("../js/app");

/**
 * Unit test for getAnswer
 */
test('getRandomAnswer returns a valid answer', () => {
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
    // runs getAnswer multiple times to make sure it works
    for(let i = 0; i < 20; i++) {
        expect(answers).toContain(getAnswer());
    }
});
