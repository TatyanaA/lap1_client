// displays questions and answers when DOM content is loaded
document.addEventListener('DOMContentLoaded', displayQuestion);
document.addEventListener('DOMContentLoaded', shuffleAnswers);

const nextPage = document.querySelector('#nextPage');
nextPage.addEventListener('click', displayQuestion); // random question displayer

let questionNumber = 0;
function displayQuestion() {
  // function to display a question and answer choices
  console.log('displayFunction() called!');

  // grab elements
  const questionElement = document.querySelector('#question1');
  const answer1 = document.querySelector('#answer1');
  const answer2 = document.querySelector('#answer2');
  const answer3 = document.querySelector('#answer3');
  const correctAnswer = document.querySelector('#correct-answer');

  fetch('https://reddy-server-12-ashraf.onrender.com/questions/american/random') // change question and answers
    .then((resp) => resp.json())
    .then((data) => {
      let retString = localStorage.getItem('prevIds');
      let prevIds = JSON.parse(retString);
      console.log(prevIds);
      let currentId = data.id;

      if (prevIds.includes(currentId)) {
        displayQuestion();
      } else {
        questionElement.textContent = `Q.${questionNumber} ${data.question}`; // output question

        //output all 4 choices
        answer1.textContent = data.answer_1;
        answer2.textContent = data.answer_2;
        answer3.textContent = data.answer_3;
        correctAnswer.textContent = data.correct_answer;

        prevIds.push(currentId);
        localStorage.setItem('prevIds', JSON.stringify(prevIds));
        console.log(prevIds);
      }
    });

  document.body.style.backgroundColor = '#8391A6';
  mess.textContent = '';

  // undisable buttons
  correctAnswer.disabled = false;
  incorrectAnswer1.disabled = false;
  incorrectAnswer2.disabled = false;
  incorrectAnswer3.disabled = false;

  questionNumber++; //increment the question number by 1
}


const correctAnswerButton = document.querySelector('#correct-answer');
nextPage.addEventListener('click', shuffleAnswers);
const buttonContainer = document.querySelector('#buttons')
function shuffleAnswers() {
  // function to randomly shuffle the answers

  const answerArray = [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]; //create array
  answerArray.push(correctAnswerButton); // add correct answer to array
  shuffleArray(answerArray);

  answerArray.forEach((answer, index) => {
    buttonContainer.appendChild(answer); // re-order the answers on the webpage
  });
}

function shuffleArray(array) {
  // function to randomly shuffle an array

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
