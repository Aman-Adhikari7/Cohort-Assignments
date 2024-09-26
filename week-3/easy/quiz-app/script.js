


let currentQuestionIndex = 0;
let score = 0;

// Get elements for question and options
const questionElement = document.getElementById('question');
const optionA = document.getElementById('a_text');
const optionB = document.getElementById('b_text');
const optionC = document.getElementById('c_text');
const optionD = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

// Function to load the current question
function loadQuestion() {
    // Get the current question from quizData
    const currentQuestion = quizData[currentQuestionIndex];

    // Set the question and options
    questionElement.innerText = currentQuestion.question;
    optionA.innerText = currentQuestion.a;
    optionB.innerText = currentQuestion.b;
    optionC.innerText = currentQuestion.c;
    optionD.innerText = currentQuestion.d;
}

// Function to get selected answer
function getSelected() {
    const answerElements = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer = undefined;

    answerElements.forEach(answer => {
        // console.log(answer)
        if (answer.checked) {
            selectedAnswer = answer.id;
            console.log(selectedAnswer)
            answer.checked=''
        }
    });

    return selectedAnswer;
}

// Function to handle submit button click
submitButton.addEventListener('click', () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer) {
        // Check if the selected answer is correct
        if (selectedAnswer === quizData[currentQuestionIndex].correct) {
            score++;
        }

        currentQuestionIndex++;

        // Check if there are more questions
        if (currentQuestionIndex < quizData.length) {
        
            loadQuestion(); // Load the next question
        } else {
            // Quiz is over, show the result
            document.getElementById('quiz').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

// Load the first question when the page loads
loadQuestion();