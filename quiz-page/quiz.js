const nextPage = document.querySelector("#nextPage");
nextPage.addEventListener("click", displayQuestion); // random question displayer






function displayQuestion() { // function to display a question and answer choices

    // grab elements
    const questionElement = document.querySelector("#question");
    const answer1 = document.querySelector("#answer1");
    const answer2 = document.querySelector("#answer2");
    const answer3 = document.querySelector("#answer3");
    const correctAnswer = document.querySelector("#correct-answer");

    fetch('https://reddy-server-12-joel-nybo.onrender.com/questions/random') // change question and answers
        .then(resp => resp.json())
        .then(data => {questionElement.textContent = data.question;

        answer1.textContent = data.answer_1;
        answer2.textContent = data.answer_2;
        answer3.textContent = data.answer_3;
        correctAnswer.textContent = data.correct_answer;
    }); 
}

const answers = document.querySelectorAll(".answer"); //select all incorrect answers
const correctAnswerButton = document.querySelector("#correct-answer");
nextPage.addEventListener("click", shuffleAnswers);

function shuffleAnswers() { // function to randomly shuffle the answers

    const answerArray = Array.from(answers); //create array and add incorrect answers
    answerArray.push(correctAnswerButton); // add correct answer to array
    shuffleArray(answerArray);

    answerArray.forEach((answer, index) => {
        document.body.appendChild(answer); // re-order the answers on the webpage
    });
}


function shuffleArray(array) { // function to randomly shuffle an array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}




