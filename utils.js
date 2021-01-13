

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
    if ((player === 1) && (opponent === 3)) {
        return 1;
    } else if ((player === 2) && (opponent === 1)) {
        return 1;
    } else if ((player === 3) && (opponent === 2)) {
        return 1;
    } else {
        return
    }
}

export function handBattle(player, opponent) {

    if ((player - opponent) === 1 || -2) {

        return 1;

    }
}