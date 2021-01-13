# Rock-Paper-Scissors App

## HTML:

- 2x radio buttons w/ attributes:
    * name, type, value
    * photos to correspond to 'heads' and 'tails'
- a button to simulate the user tossing their coin
- divs for each element of info:
    * wins
    * total tosses
    * current toss guess
    * current toss result
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
