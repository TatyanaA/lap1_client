const randomiseButton = document.querySelector("#next-page");
randomiseButton.addEventListener("click", displayQuestion); // random question displayer


function displayQuestion() { // function to display a quote and the author
    const questionElement = document.querySelector("#question");
    const answer1 = document.querySelector("#answer1");
    const answer2 = document.querySelector("#answer2");
    const answer3 = document.querySelector("#answer3");
    const correctAnswer = document.querySelector("#correct-answer");
    fetch('http://localhost:3000/questions/random')
        .then(resp => resp.json())
        .then(data => {questionElement.textContent = data.question;

        answer1.textContent = data['Answer-1'];
        answer2.textContent = data['Answer-2'];
        answer3.textContent = data['Answer-3'];
        correctAnswer.textContent = data['Correct-Answer'];

    }); // fetches a random quote from the json file
}


