
import { handScore, handBattle } from './utils.js';

const handButton = document.getElementById('hand-button');
const yourHand = document.getElementById('your-hand');
const feedbackMsg = document.getElementById('feedback');
const handsWon = document.getElementById('hands-won');
const totalHands = document.getElementById('total-hands');


let winCount = 0;
let playCount = 0;



handButton.addEventListener('click', () => {

    const oppHand = Math.ceil(Math.random() * 3);

    const playerHand = handScore(document.querySelector('input:checked'));

    const result = (handBattle(playerHand.value, oppHand));

    if (result === 1) {

        winCount++;
    }


    playCount++;

    console.log(winCount);
    console.log(playCount);
    console.log(oppHand);
    console.log(playerHand);
    console.log('result');
    console.log(result);

    yourHand.textContent = playerHand.value;
    feedbackMsg.textContent = 'Thanks for Playing!';
    handsWon.textContent = `You have won ${winCount} hands`;
    totalHands.textContent = `out of ${playCount} total hands.`;


});

