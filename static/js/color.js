
const allButtons = document.querySelector('buttons')

const correctAnswer = document.getElementById("correct-answer")
correctAnswer.addEventListener('click', () => {

    document.body.style.backgroundColor = 'green'
    const message = "Correct!"
    mess.textContent= message
});


const incorrectAnswer1 = document.getElementById('answer1')
const incorrectAnswer2 = document.getElementById('answer2')
const incorrectAnswer3 = document.getElementById('answer3')

incorrectAnswer1.addEventListener('click', changeBack)
incorrectAnswer2.addEventListener('click', changeBack)
incorrectAnswer3.addEventListener('click', changeBack)

function changeBack() {
    document.body.style.backgroundColor = 'red'
    const message = "Incorrect!"
    mess.textContent= message


}
