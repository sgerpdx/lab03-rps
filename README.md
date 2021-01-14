# Rock-Paper-Scissors App

## HTML:

- 3x radio buttons w/ attributes:
    * name, type, value
    * photos to correspond to 'rock,' 'paper,' and 'scissors'
- a button to simulate the user choosing their hand
- divs for each element of info:
    * wins
    * total hands
    * current hand choice
    * current opponent choice
    * current result
    * feedback message

## JavaScript:

- grab DOM elements from HTML
- initialize states:
    * wins count
    * total count
- Event Listener for 'Toss' button click:
    * run Function and edit textContent of DOM divs
- Math.random variable to generate toss result
- Function in utils to evaluate guess vs result
- Tests to TDDevelop the Function


## Table demonstrating mathematical basis of awarding 'win' to a value of -1 or 2 for (user-computer) equation:

|   User   | # Score | Computer | # Score | Win Score | Draw Score | Lose Score |
|:--------:|:-------:|:--------:|:-------:|:---------:|:----------:|:----------:|
|   Rock   |    1    |   Rock   |    1    |           |      0     |            |
|   Rock   |    1    |   Paper  |    2    |           |            |     -1     |
|   Rock   |    1    | Scissors |    3    |     -2    |            |            |
|   Paper  |    2    |   Rock   |    1    |     1     |            |            |
|   Paper  |    2    |   Paper  |    2    |           |      0     |            |
|   Paper  |    2    | Scissors |    3    |           |            |     -1     |
| Scissors |    3    |   Rock   |    1    |           |            |      2     |
| Scissors |    3    |   Paper  |    2    |     1     |            |            |
| Scissors |    3    | Scissors |    3    |           |      0     |            |
|          |         |          |         |           |            |            |