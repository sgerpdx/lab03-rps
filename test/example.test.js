

import { handScore } from '../utils.js';

const test = QUnit.test;

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
