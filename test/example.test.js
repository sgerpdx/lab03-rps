

import { handScore, didUserWin } from '../utils.js';
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;


// tests for handScore:

test('for player choice of "rock" this function should return a value of 1', (assert) => {

    const playerChoice = 'rock';
    const expected = 1;
    const actual = handScore(playerChoice);

    assert.equal(actual, expected);
});

test('for player choice of "paper" this function should return a value of 2', (assert) => {

    const playerChoice = 'paper';
    const expected = 2;
    const actual = handScore(playerChoice);

    assert.equal(actual, expected);
});

test('for player choice of anything other than "rock" or "paper" this function should return a value of 3', (assert) => {

    const playerChoice = 'moon';
    const expected = 3;
    const actual = handScore(playerChoice);

    assert.equal(actual, expected);
});



// tests for didUserWin:

test('for player value of 1 (rock) and computer value of 3 (scissors) this function should return a value of "win"', (assert) => {

    const player = 1;
    const computer = 3;
    const expected = 'win';
    const actual = didUserWin(player, computer);

    assert.equal(actual, expected);
});

test('for player value of 1 (rock) and computer value of 1 (rock) this function should return a value of "draw"', (assert) => {

    const player = 1;
    const computer = 1;
    const expected = 'draw';
    const actual = didUserWin(player, computer);

    assert.equal(actual, expected);
});

test('for player value of 1 (rock) and computer value of 2 (paper) this function should return a value of "lose"', (assert) => {

    const player = 1;
    const computer = 2;
    const expected = 'lose';
    const actual = didUserWin(player, computer);

    assert.equal(actual, expected);
});




// tests for getRandomThrow:

test('for random input 1, fuction should return value of "rock"', (assert) => {

    const random = 1;
    const expected = 'rock';
    const actual = getRandomThrow(random);

    assert.equal(actual, expected);
});


test('for random input 2, fuction should return value of "scissors"', (assert) => {

    const random = 2;
    const expected = 'paper';
    const actual = getRandomThrow(random);

    assert.equal(actual, expected);
});


test('for random input 3, fuction should return value of "paper"', (assert) => {

    const random = 3;
    const expected = 'scissors';
    const actual = getRandomThrow(random);

    assert.equal(actual, expected);
});

