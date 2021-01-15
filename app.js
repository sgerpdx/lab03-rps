
import { handScore, didUserWin, generate } from './utils.js';
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

    const playerHand = handScore((document.querySelector('input:checked')).value);

    if (didUserWin(playerHand) === 'win') {

        winCount++;
        feedbackMsg.textContent = 'You win!';

    } else if (didUserWin(playerHand) === 'draw') {

        feedbackMsg.textContent = 'A draw! How about a rematch?';

    } else if (didUserWin(playerHand) === 'lose') {

        feedbackMsg.textContent = 'Tough loss -- try again?';

    }


    playCount++;

    const winPercent = (Math.ceil((winCount / playCount) * 100));
    const opponentHand = getRandomThrow(generate());

    handsWon.textContent = `You have won ${winCount} hands`;
    totalHands.textContent = `out of ${playCount} total hands.`;
    successRate.textContent = `for a success rate of ${winPercent}%.`;
    versusHand.textContent = `Your opponent chose:   ${opponentHand}`;


});

