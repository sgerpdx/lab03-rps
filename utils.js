

export function handScore(playerChoice) {

    if (playerChoice === 'rock') {

        return 1;

    } else if (playerChoice === 'paper') {

        return 2;

    } else {

        return 3;

    }
}


export function didUserWin(player, computer) {

    if ((player - computer === 1) || (player - computer === -2)) {

        return 'win';

    } else if (player - computer === 0) {

        return 'draw';

    } else {

        return 'lose';

    }
}