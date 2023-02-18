const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.querySelector('.quiz-container');
const quizHeader = document.querySelector('.quiz-header');
const question = document.getElementById('question');
const answers = document.querySelectorAll('.answer');
const submit = document.querySelector('.submit');

let score = 0;
let count = 0;

function getFirstQuestion(count) {
    quizHeader.innerHTML = 
    `
    <h2 id="question">${quizData[count].question}</h2>
    <ul>
        <li>
            <input type="radio" id="a" class="answer">
            <label id="a-text" for="a">${quizData[count].a}</label>
        </li>
        <li>
            <input type="radio" id="b" class="answer">
            <label id="b-text" for="b">${quizData[count].b}</label>
        </li>
        <li>
            <input type="radio" id="c" class="answer">
            <label id="c-text" for="c">${quizData[count].c}</label>
        </li>
        <li>
            <input type="radio" id="d" class="answer">
            <label id="d-text" for="d">${quizData[count].d}</label>
        </li>
    </ul>
    `;

    getScore(count);
}

getFirstQuestion(count);

submit.addEventListener('click', () => {
    count++;
    if(count >= quizData.length) {
        quiz.style.paddingTop = '30px';
        quiz.innerHTML = 
        `
        <h2 style="text-align: center" id="question">Your final score is ${score}/${quizData.length}.</h2>
        <button onclick="location.reload()">Reload</button>
        `;
    }
    getFirstQuestion(count);
});

function getScore(num) {
    let answers = document.querySelectorAll('.answer');
    answers.forEach(ans => {
        ans.addEventListener('click', (e) => {
        clearAllInputs(answers);
        e.target.checked = true;
            if(e.target.id === quizData[num].correct) {
                score = score + 1;
            }
        });
    });
}

function clearAllInputs(arr) {
    arr.forEach(a => {
        a.checked = false;
    });
}

