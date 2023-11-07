// displays questions and answers when DOM content is loaded
document.addEventListener('DOMContentLoaded', displayQuestion);
document.addEventListener('DOMContentLoaded', shuffleAnswers);

const nextPage = document.querySelector('#nextPage');
nextPage.addEventListener('click', displayQuestion); // random question displayer

function displayQuestion() {
  // function to display a question and answer choices

  // grab elements
  const questionElement = document.querySelector('#question');
  const answer1 = document.querySelector('#answer1');
  const answer2 = document.querySelector('#answer2');
  const answer3 = document.querySelector('#answer3');
  const correctAnswer = document.querySelector('#correct-answer');

  fetch(
    'https://reddy-server-12-ashraf.onrender.com/questions/british/random/practice'
  ) // change question and answers
    .then((resp) => resp.json())
    .then((data) => {
      questionElement.textContent = data.question;

      answer1.textContent = data.answer_1;
      answer2.textContent = data.answer_2;
      answer3.textContent = data.answer_3;
      correctAnswer.textContent = data.correct_answer;
    });
  document.body.style.backgroundColor = 'white';
  mess.textContent = '';
  correctAnswer.disabled = false;
  incorrectAnswer1.disabled = false;
  incorrectAnswer2.disabled = false;
  incorrectAnswer3.disabled = false;
}

const answers = document.querySelectorAll('.answer');
const correctAnswerButton = document.querySelector('#correct-answer');
nextPage.addEventListener('click', shuffleAnswers);

function shuffleAnswers() {
  // function to randomly shuffle the answers

  const answerArray = Array.from(answers); //create array
  answerArray.push(correctAnswerButton); // add correct answer to array
  shuffleArray(answerArray);

  answerArray.forEach((answer, index) => {
    document.body.appendChild(answer); // re-order the answers on the webpage
  });
}

function shuffleArray(array) {
  // function to randomly shuffle an array

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}