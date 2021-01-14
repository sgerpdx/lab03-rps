
import { handScore, didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';

const handButton = document.getElementById('hand-button');
const feedbackMsg = document.getElementById('feedback');
const handsWon = document.getElementById('hands-won');
const totalHands = document.getElementById('total-hands');
const successRate = document.getElementById('win-percent');
const versusHand = document.getElementById('versus');

let winCount = 0;
let playCount = 0;


handButton.addEventListener('click', () => {

    const compHand = Math.ceil(Math.random() * 3);
    const playerHand = handScore(document.querySelector('input:checked'));

    if (didUserWin(playerHand, compHand) === 'win') {

        winCount++;
        console.log('win');
        feedbackMsg.textContent = 'You win!';

    } else if (didUserWin(playerHand, compHand) === 'draw') {

        feedbackMsg.textContent = 'A draw! How about a rematch?';

    } else if (didUserWin(playerHand, compHand) === 'lose') {

        feedbackMsg.textContent = 'Tough loss -- try again?';

    }


    playCount++;

    console.log(winCount);
    console.log(playCount);
    console.log(compHand);
    console.log(playerHand);

    const winPercent = (Math.ceil((winCount / playCount) * 100));
    const opponentHand = getRandomThrow(compHand);

    handsWon.textContent = `You have won ${winCount} hands`;
    totalHands.textContent = `out of ${playCount} total hands.`;
    successRate.textContent = `for a success rate of ${winPercent}%.`;
    versusHand.textContent = `Your opponent chose:   ${opponentHand}`;


});

