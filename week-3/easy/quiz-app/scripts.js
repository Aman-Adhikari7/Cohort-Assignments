

let score =0
let questionindex= 0

const question = document.getElementById("question")
const optionA = document.getElementById("option-a")
const optionB = document.getElementById("option-b")
const optionC = document.getElementById("option-c")
const optionD = document.getElementById("option-d")
const button  = document.getElementById("submit")


function loader(){
     const currentquestion = quizData[questionindex]


     question.innerText = '';
     optionA.innerText = '';
     optionB.innerText = '';
     optionC.innerText = '';
     optionD.innerText = '';

    question.innerText = currentquestion.question
    optionA.innerText = currentquestion.a
    optionB.innerText = currentquestion.b
    optionC.innerText = currentquestion.c
    optionD.innerText = currentquestion.d

}

function check(){

    const checked = document.querySelectorAll("input[name=answer]")
    let selectedAnswer = undefined;
    
    checked.forEach((value)=>{
        if(value.checked)
            selectedAnswer = value.id
        // console.log(value.id)
         value.checked=''
    })
   
   return selectedAnswer
}

button.addEventListener('click',()=>{
    const selectedAnswer =check()

    if(selectedAnswer == quizData[questionindex].correct){
         score++;
    }
    questionindex++;

    if(questionindex < quizData.length){
        loader()
    }else{
        document.getElementById('quiz').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
})
// check()
loader()
