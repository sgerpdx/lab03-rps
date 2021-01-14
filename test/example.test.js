

import { handScore, handBattle } from '../utils.js';

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


// tests for handBattle:

test('for player value 1 and opponent value 3 function should return a 1', (assert) => {

    const player = 1;
    const opponent = 3;
    const expected = 1;
    const actual = handBattle(player, opponent);

    assert.equal(actual, expected);
});


test('for player value 2 and opponent value 3 function should return a 0', (assert) => {

    const player = 2;
    const opponent = 3;
    const expected = 0;
    const actual = handBattle(player, opponent);

    assert.equal(actual, expected);
});