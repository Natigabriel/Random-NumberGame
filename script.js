const input = document.querySelector('input');
const btn = document.querySelector('button');


let numberOfGuesses = 0;
let guessedNums = [];

btn.addEventListener('click', () => {
    const num = input.value;
    const randomNum = Math.floor(Math.random() * 50) + 1;
    numberOfGuesses++;
      
     input.value = ''; // Clear the input field
    guessedNums.push(num);  

    if (num === randomNum) {
        document.getElementById('firstp').textContent = `You guessed it right!`;
    } else if (num > randomNum) {
        document.getElementById('firstp').textC34ontent = `Your guess was too high!`;
    } else {
        document.getElementById('firstp').textContent = `Your guess was too low!`;
    }
    document.getElementById('secondp').textContent = `No. of guesses: ${numberOfGuesses}`;
   document.getElementById('thirdp').textContent = `You've guessed: ${guessedNums.join(' ,')}`;


    if(num > 50){
        alert('Please enter a number between 1 to 50');
         document.getElementById('firstp').style.display = 'none';
         document.getElementById('secondp').style.display = 'none';
         document.getElementById('thirdp').style.display = 'none';
    }else{
        document.getElementById('firstp').style.display = 'block';
         document.getElementById('secondp').style.display = 'block';
         document.getElementById('thirdp').style.display = 'block';
    }
});
