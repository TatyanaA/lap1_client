const correctAnswer = document.getElementById('correct-answer');
correctAnswer.addEventListener('click', () => {
  // changes background colour to green

  document.body.style.backgroundColor = 'green';
  const message = 'Correct!';
  mess.textContent = message;
    // disable buttons when an answer is selected
    correctAnswer.disabled = true;
    incorrectAnswer1.disabled = true;
    incorrectAnswer2.disabled = true;
    incorrectAnswer3.disabled = true;
});

const incorrectAnswer1 = document.getElementById('answer1');
const incorrectAnswer2 = document.getElementById('answer2');
const incorrectAnswer3 = document.getElementById('answer3');

// add event listners for incorrect answer selection
incorrectAnswer1.addEventListener('click', changeBack);
incorrectAnswer2.addEventListener('click', changeBack);
incorrectAnswer3.addEventListener('click', changeBack);

function changeBack() {
  // allows background colour to change to red
  document.body.style.backgroundColor = 'red';
  const message = 'Incorrect!';
  mess.textContent = message;
  correctAnswer.disabled = true;
  incorrectAnswer1.disabled = true;
  incorrectAnswer2.disabled = true;
  incorrectAnswer3.disabled = true;
}
