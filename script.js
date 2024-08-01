// Guess the Number Game
// Description: Create a game where the user has to guess a randomly generated number within a certain range.

const input = document.querySelector('input');

const click = () => {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    const answer = parseInt(input.value); // Assuming 'input' is defined elsewhere
    
    const newParagraph = document.createElement('p');
    
   
    
    document.body.appendChild(newParagraph); // Assuming you want to append it to the body
}

