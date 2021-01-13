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
