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
    
    let quizItem = `<div class="quiz-item box-shadow">
        <div>
            <div class="row pt-3 pt-md-2 head-text">
                <div class="col-4 ps-4 ">
                    <h5 class="fw-bold">${indexes} of 10</h5>
                </div>
                <div class="col-4 text-center">
                    <h1 class="text-center fw-bold text-secondary">QUIZ</h1>
                </div>
            </div>
            <p class="question mx-auto text-center mt-3 py-3 px-1 fw-bold text-white">${datas.question}</p>
            <div class="row gy-md-5 gy-3 mx-4 mt-2">
                <div class="col-md-6 opt-wrap">
                    <div class="bg-white rounded-5">
                    <button type="button" class="btn btn-light btn-transparent opt border w-100  rounded-5">${datas.option[0]}</button>
            </div>
                </div>
                <div class="col-md-6 opt-wrap">
                    <div class="bg-white rounded-5">
                    <button type="button" class="btn btn-light btn-transparent opt border w-100  rounded-5">${datas.option[1]}</button>
            </div>
                </div>
                <div class="col-md-6 opt-wrap">
                    <div class="bg-white rounded-5">
                    <button type="button" class="btn btn-light btn-transparent opt border w-100  rounded-5">${datas.option[2]}</button>
            </div>
                </div>
                <div class="col-md-6 opt-wrap">
                    <div class="bg-white rounded-5">
                        <button type="button" class="btn btn-light btn-transparent opt border w-100  rounded-5">${datas.option[3]}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto justify-content-center d-flex align-items-center py-2 lead-text rounded mt-5 mt-md-4">
            <p class="mb-0 fw-bold score">Choose an Option</p>
        </div>
        <div class="row py-2 px-5 mt-4 btn-top">
            <div class="col-6">
                <button type="button" class="btn btn-danger w-100" id="prevButton" onclick="showPrevQuiz()">Prev</button>
            </div>
            <div class="col-6 text-end">
                <button type="button" class="btn btn-danger w-100" id="nextButton" onclick="showNextQuiz()">Next</button>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-lg-0">
            <button type="button" class="btn btn-primary w-50 submitbtn" id="submitBtn" onclick="submitQuiz()">Submit</button>
        </div>
    </div>`;

    quizArea.innerHTML = quizItem;

    const optionElements = document.querySelectorAll('.opt');
    const prevBtn = document.getElementById('prevButton');
    let scoreDetails = document.querySelector('.score');
    const submitButton = document.getElementById('submitBtn');
    submitButton.style.display = 'none';
    let nextDisable = document.getElementById('nextButton');
    let bgGlow = document.querySelector('.lead-text');


    optionElements.forEach((opt, index) => {
        nextDisable.disabled = true;
        prevBtn.disabled = true;
        opt.addEventListener('click', () => {
            scoreDetails.textContent = `is (${opt.textContent}) your final answer`;
            scoreDetails.style.color = 'maroon';
            nextDisable.disabled = false;
            prevBtn.disabled = false;

            nextDisable.addEventListener('click', () => {
                if (opt.textContent == arrayOFQuiz[currentQuiz].answer) {
                    result += correct;
                    scoreDetails.textContent = 'Correct';
                    scoreDetails.style.color = 'white';
                    bgGlow.classList.remove('incorrect-option');
                    bgGlow.classList.add('correct-option');
                    document.querySelector(".result").innerHTML = `${result}`;
                } else {
                    result += wrong;
                    scoreDetails.textContent = 'Incorrect';
                    scoreDetails.style.color = 'white';
                    bgGlow.classList.remove('correct-option');
                    bgGlow.classList.add('incorrect-option');
                    document.querySelector(".result").innerHTML = `${result}`;
                }
    
                optionElements.forEach((el, i) => {
                    if (i === index) {
                        el.disabled = false;
                    } else {
                        el.disabled = true;
                    }
                })
            });

        });
    });

    nextDisable.addEventListener('click', () => {
        if (currentQuiz < 9) {
            nextDisable.style.display = "block";
            prevBtn.style.display = 'block';
            submitButton.style.display = 'none';

        } else {
            nextDisable.style.display = "none";
            prevBtn.style.display = 'none';
            submitButton.style.display = 'block';
        }
    });

    if (currentQuiz === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

}


let retakeQuizBtn = document.querySelector('.retakequiz');

retakeQuizBtn.addEventListener('click', () => {
    setTimeout(function () {
        location.reload();
    }, 3000);
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
    setTimeout(function () {
        if (currentQuiz < arrayOFQuiz.length - 1) {
            currentQuiz++;
            indexes++;
            showQuiz();
        }
    }, 2000);
}




function submitQuiz() {
    setTimeout(function () {
        modal.style.display = "block";
    }, 1000);
    document.querySelector('.submitbtn').textContent = "loading....";
}

showQuiz();

