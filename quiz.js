function checkAnswer() {
    correctAnswer = '4'; 
    let userAnswer = document.querySelector('input[name="quiz"]:checked'); 
    let feedback = document.querySelector('#feedback');
    if(userAnswer && userAnswer.value === correctAnswer) {
        feedback.textContent = 'Correct! Well done.';
    } else{
        feedback.textContent = "That's incorrect. Try again!";
    };
}
const subBtn = document.getElementById('submit-answer');

subBtn.addEventListener('click', checkAnswer);