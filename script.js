const quizdata = [
    {
        question: "Which language runs in a wed browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct: "d"
    },
    {
        question: "CSS stands For?",
        a:"central style sheet",
        b:"Cascading style sheet",
        c:"cascading simple sheet",
        d:"NONE",
        correct: "b"
    },
    {
        question: "HTML stands for?",
        a:"Hypertext markup language",
        b:"hyper mark language",
        c:"hypertext markDown language",
        d:"NONE",
        correct: "a"
    },
    {
        question: "What year was javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"NONE",
        correct: "b"
    }

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currQuiz =0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currQuizdata = quizdata[currQuiz];

    questionEl.innerText = currQuizdata.question;
    a_text.innerText = currQuizdata.a
    b_text.innerText = currQuizdata.b
    c_text.innerText = currQuizdata.c
    d_text.innerText = currQuizdata.d

}

function deselectAnswers(){
    answerEls.forEach(ele => ele.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(ele=>{
        if(ele.checked){
            answer = ele.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected();
    
    if(answer){
        if(answer === quizdata[currQuiz].correct){
            score++;
        }
        currQuiz++
        if(currQuiz <quizdata.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizdata.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
    // else{
    //     alert("select option to move to next question")
    // }
})

