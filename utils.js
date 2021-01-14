

export function handScore(playerChoice) {

    if (playerChoice.value === 'rock') {

        return 1;

    } else if (playerChoice.value === 'paper') {

        return 2;

    } else {

        return 3;

    }
}
