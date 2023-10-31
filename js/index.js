const arrayOFQuiz = [
    {
        question: "how many times the digit '9' appears in the numbers from 1 to 100",
        option: [
            40,
            20,
            30,
            50,
        ],
        answer: 20,
    },

    {
        question: "Which of these is written in CamelCase",
        option: [
            "DavidDozie",
            "davidDozie",
            "david_dozie",
            "Daviddozie",
        ],
        answer: "davidDozie",
    },

    {
        question: "Which of these is not a datatype in JavaScript",
        option: [
            "null",
            "Biginit",
            "object",
            "number",
        ],
        answer: "Biginit",
    },

    {
        question: "Which of these is not a conditional statement in JavaScript",
        option: [
            "else",
            "else if",
            "switch",
            "then",
        ],
        answer: "then",
    },

    {
        question: "Which of these is a keyword in JavaScript",
        option: [
            "but",
            "if",
            "make",
            "not",
        ],
        answer: "if",
    },

    {
        question: "mathematical name for low-level language",
        option: [
            "machine language",
            "computer language",
            "Binary",
            "local language",
        ],
        answer: "Binary",
    },

    {
        question: "Which of these is not the purpose of a function in JavaScript",
        option: [
            "Modularization",
            "Testing",
            "Scoping",
            "contract",
        ],
        answer: "contract",
    },

    {
        question: "How do you display a message in the browser console?",
        option: [
            "console.log('Hello, world!');",
            "consoel.log('Hello, world!');",
            "console.log'Hello, world!';",
            "console.lod('Hello, world!');",
        ],
        answer: "console.log('Hello, world!');",
    },

    {
        question: "which of these is not the use of an array in javascript",
        option: [
            "Storing Lists of Items",
            "consume object",
            "Stacks and Queues",
            "Implementing Data Structures",
        ],
        answer: "consume object",
    },

    {
        question: "which of these is not a logical oparand in javascript",
        option: [
            "&&",
            "||",
            "%",
            "!",
        ],
        answer: "%",
    },
]

let quizArea = document.querySelector('.quiz-wrapper');
let modal = document.querySelector('.modal')

let currentQuiz = 0;
let indexes = 1;
let result = 0;
let wrong = 0;
let correct = 10;

function showQuiz() {
    let datas = arrayOFQuiz[currentQuiz];
    let isLastQuiz = currentQuiz === arrayOFQuiz.length - 1;

    let nextButton = isLastQuiz
        ? `<button type="button" class="btn btn-primary w-75 submitbtn" onclick="submitQuiz()">Submit</button>`
        : `<button type="button" class="btn btn-danger w-75" onclick="showNextQuiz()">Next</button>`;

    let quizItem = `<div class="quiz-item">
        <div>
            <div class="row pt-3 pt-md-2">
                <div class="col-2 ps-4">
                    <h3 class="fw-bold">${indexes}/10</h3>
                </div>
                <div class="col-8 text-center">
                    <h1 class="text-center fw-bold text-secondary">QUIZ</h1>
                </div>
            </div>
            <p class="question mx-auto text-center mt-3 py-3 px-1 fw-bold text-white">${datas.question}</p>
            <div class="row gy-md-5 gy-4 mx-4 mt-4">
                <div class="col-md-6">
                    <div class="opt bg-white rounded-5">
                        <div class="d-flex justify-content-center py-1 border rounded-5 opt-bg">
                            <p class="opt mb-0">${datas.option[0]}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="opt bg-white rounded-5">
                        <div class="d-flex justify-content-center py-1 border rounded-5 opt-bg">
                            <p class="opt mb-0">${datas.option[1]}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="opt bg-white rounded-5">
                        <div class="d-flex justify-content-center py-1 border rounded-5 opt-bg">
                            <p class="opt mb-0">${datas.option[2]}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="opt bg-white rounded-5">
                        <div class="d-flex justify-content-center py-1 border rounded-5 opt-bg">
                            <p class="opt mb-0">${datas.option[3]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto justify-content-center d-flex align-items-center py-2 lead-text rounded mt-5 mt-md-4">
            <p class="mb-0 fw-bold score">Choose an Option</p>
        </div>
        <div class="row pt-5 px-5 mt-4">
            <div class="col-6">
                <button type="button" class="btn btn-danger w-75" onclick="showPrevQuiz()">Prev</button>
            </div>
            <div class="col-6 text-end">
                ${nextButton}
            </div>
        </div>
    </div>`;

    quizArea.innerHTML = quizItem;

    const optionElements = document.querySelectorAll('.opt');

    optionElements.forEach((opt) => {
        opt.addEventListener('click', () => {
            if (opt.textContent.trim() == datas.answer) {
                document.querySelector('.score').textContent = 'Correct';
                document.querySelector('.score').style.color = 'green';
                result += correct;
                document.querySelector(".result").innerHTML = `${result}`;
            } else {
                document.querySelector('.score').textContent = 'Incorrect';
                document.querySelector('.score').style.color = 'red';
                result += wrong;
                document.querySelector(".result").innerHTML = `${result}`;
            }
        });
    });
}

let retakeQuizBtn = document.querySelector('.retakequiz');

retakeQuizBtn.addEventListener('click', () => {
    setTimeout(function () {
        location.reload();
    }, 4000);
    retakeQuizBtn.style.display = "none";
    document.querySelector('.loader').style.display = "block";
})

function showPrevQuiz() {
    if (currentQuiz > 0) {
        currentQuiz--;
        indexes--;
        showQuiz();
    }
}

function showNextQuiz() {
    if (currentQuiz < arrayOFQuiz.length - 1) {
        currentQuiz++;
        indexes++;
        showQuiz();
    }
}

function submitQuiz() {
    setTimeout(function () {
        modal.style.display = "block";
    }, 1000);
    document.querySelector('.submitbtn').textContent = "loading...." 
}

showQuiz();

