const randomiseButton = document.querySelector("#next-page");
randomiseButton.addEventListener("click", displayQuestion); // random question displayer





function displayQuestion() { // function to display a question and answer choices

    // grab elements
    const questionElement = document.querySelector("#question");
    const answer1 = document.querySelector("#answer1");
    const answer2 = document.querySelector("#answer2");
    const answer3 = document.querySelector("#answer3");
    const correctAnswer = document.querySelector("#correct-answer");


    fetch('http://localhost:3000/questions/random') // change question and answers
        .then(resp => resp.json())
        .then(data => {questionElement.textContent = data.question;

        answer1.textContent = data.answer_1;
        answer2.textContent = data.answer_2;
        answer3.textContent = data.answer_3;
        correctAnswer.textContent = data.correct_answer;

    }); 
}

