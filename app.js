
import { handScore } from './utils.js';

const handButton = document.getElementById('hand-button');
const yourHand = document.getElementById('your-hand');
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

    }

    playCount++;

    console.log(winCount);
    console.log(playCount);
    console.log(oppHand);
    console.log(playerHand);

    const winPercent = (Math.ceil((winCount / playCount) * 100));

    yourHand.textContent = playerHand.value;
    feedbackMsg.textContent = 'Thanks for Playing!';
    handsWon.textContent = `You have won ${winCount} hands`;
    totalHands.textContent = `out of ${playCount} total hands.`;
    successRate.textContent = `for a success rate of ${winPercent}%.`;


});

