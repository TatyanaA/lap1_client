
const correctAnswer = document.getElementById("correct-answer");
body = document.querySelector('body')

correctAnswer.addEventListener("click", () => {

    document.body.style.backgroundColor = 'green';
});


const incorrectAnswer1 = document.getElementById("answer1")
const incorrectAnswer2 = document.getElementById("answer2")
const incorrectAnswer3 = document.getElementById("answer3")

incorrectAnswer1.addEventListener('click', changeBack)
incorrectAnswer2.addEventListener('click', changeBack)
incorrectAnswer3.addEventListener('click', changeBack)

function changeBack() {
    document.body.style.backgroundColor = 'red'
}
