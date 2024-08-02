const input = document.querySelector('input');
const btn = document.querySelector('button');
// const guessList = document.createElement('ul');

// document.body.appendChild(guessList);

let numberOfGuesses = 0;
let guessedNums = [];

btn.addEventListener('click', () => {
    const num = input.value;
    const randomNum = Math.floor(Math.random() * 50) + 1;

    numberOfGuesses++;
    guessedNums.push(num);
    

    // guessList.innerHTML = ''; // Clear the previous list
    // guessedNums.forEach(value => {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = value;
    //     guessList.appendChild(listItem);
    // });

    if (num === randomNum) {
        document.getElementById('firstp').textContent = `You guessed it right!`;
    } else if (num > randomNum) {
        document.getElementById('firstp').textContent = `Your guess was too high!`;
    } else {
        document.getElementById('firstp').textContent = `Your guess was too low!`;
    }
    document.getElementById('secondp').textContent = `No. of guesses: ${numberOfGuesses}`;
    document.getElementById('thirdp').textContent = `You've guessed: ${guessedNums.join(', ')}`;
});
