
import { handScore } from './utils.js';

const handButton = document.getElementById('hand-button');
const feedbackMsg = document.getElementById('feedback');
const handsWon = document.getElementById('hands-won');
const totalHands = document.getElementById('total-hands');
const successRate = document.getElementById('win-percent');

let winCount = 0;
let playCount = 0;


handButton.addEventListener('click', () => {

    const oppHand = Math.ceil(Math.random() * 3);
    const playerHand = handScore(document.querySelector('input:checked'));

    if ((playerHand - oppHand === 1) || (playerHand - oppHand === -2)) {

        winCount++;
        console.log('win');
        feedbackMsg.textContent = 'You win!';

    } else if (playerHand - oppHand === 0) {

        feedbackMsg.textContent = 'A draw! How about a rematch?';

    } else {

        feedbackMsg.textContent = 'Tough loss -- try again?';
    }

    playCount++;

    console.log(winCount);
    console.log(playCount);
    console.log(oppHand);
    console.log(playerHand);

    const winPercent = (Math.ceil((winCount / playCount) * 100));

    handsWon.textContent = `You have won ${winCount} hands`;
    totalHands.textContent = `out of ${playCount} total hands.`;
    successRate.textContent = `for a success rate of ${winPercent}%.`;


});

