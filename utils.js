

export function handScore(playerChoice) {

    if (playerChoice === 'rock') {

        return 1;

    } else if (playerChoice === 'paper') {

        return 2;

    } else {

        return 3;

    }
}


export function didUserWin(player) {

    if ((player - generate() === 1) || (player - generate() === -2)) {

        return 'win';

    } else if (player - generate() === 0) {

        return 'draw';

    } else {

        return 'lose';

    }
}

export function generate(){
    let compHand = Math.ceil(Math.random() * 3);
    return compHand;
}
