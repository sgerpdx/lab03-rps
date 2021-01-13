

export function handBattle(playerChoice) {
    if (playerChoice === 'rock') {
        return 1;
    } else if (playerChoice === 'paper') {
        return 2;
    } else {
        return 3;
    }
}
