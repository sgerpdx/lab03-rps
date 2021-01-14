

export function handScore(playerChoice) {
    if (playerChoice === 'rock') {
        return 1;
    } else if (playerChoice === 'paper') {
        return 2;
    } else {
        return 3;
    }
}


export function handBattle(player, opponent) {

    if ((player - opponent) === 1 || -2) {

        return 1;

    } else {

        return 0;

    }
}