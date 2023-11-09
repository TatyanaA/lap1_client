let score = 0;
const correctAnswer = document.getElementById('correct-answer');
correctAnswer.addEventListener('click', changeCorrect);

const incorrectAnswer1 = document.getElementById('answer1');
const incorrectAnswer2 = document.getElementById('answer2');
const incorrectAnswer3 = document.getElementById('answer3');

// add event listners for incorrect answer selection
incorrectAnswer1.addEventListener('click', changeBack);
incorrectAnswer2.addEventListener('click', changeBack);
incorrectAnswer3.addEventListener('click', changeBack);

function changeBack() {
  // allows background colour to change to red and disables other buttons if user selects an incorrect answer

  document.body.style.backgroundColor = 'red';

  //display message on screen
  const message = `Incorrect! You score 0 points. You currently have ${score} points`;
  mess.textContent = message;

  // disable buttons when an answer is selected
  correctAnswer.disabled = true;
  incorrectAnswer1.disabled = true;
  incorrectAnswer2.disabled = true;
  incorrectAnswer3.disabled = true;
}

function changeCorrect() {
  // changes background colour to green if user selects the correct answer

  document.body.style.backgroundColor = 'green';
  score++;

  //display message on screen
  const message = `Correct! You now have ${score} points`;
  mess.textContent = message;

  // disable buttons when an answer is selected
  correctAnswer.disabled = true;
  incorrectAnswer1.disabled = true;
  incorrectAnswer2.disabled = true;
  incorrectAnswer3.disabled = true;
}

let clickCount = 0;
const next = document.querySelector('#nextPage');

next.addEventListener('click', endGame);

function endGame() {
  clickCount++;
  if (clickCount === 5) {
    Swal.fire({
      icon: 'success',
      title: `Congrats on completing the quiz! You scored ${score} points!`,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    }).then(() => {
      window.location.href = './index.html'; //goes back to home page
    });
  }
}
