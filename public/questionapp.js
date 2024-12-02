

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//push the questions into available questions array
function setAvailableQuestions() {
    quizBox.classList.remove("hide");
    homeBox.classList.add("hide");
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i]);
    }
}

//set question number and questions and options
function getNewQuestion() {
    //set question number
    questionNumber.innerHTML = `Question ${questionCounter + 1} of ${quiz.length}`

    //set question text
    //get random question

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    //get the position of question index from the available question array
    const index1 = availableQuestions.indexOf(questionIndex);

    //remove the questionindex from the available question array so that the question does not repeat.
    availableQuestions.splice(index1, 1);

    //set options
    //get the length of options
    const optionLen = currentQuestion.options.length;

    //push options into availableOptions array
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i);
    }

    optionContainer.innerHTML = "";

    let animationDelay = 0.15;
    //create options in html
    for (let i = 0; i < optionLen; i++) {
        //random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        //get the position of 'optionindex from the available options.
        const index2 = availableOptions.indexOf(optionIndex);
        //remove the optionIndex from the available options
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");

    }

    questionCounter++;
}

//get the result of current attempt question
function getResult(element) {
    const id = parseInt(element.id);
    //get the answer by comparing the id of the clicked option
    if (id === currentQuestion.answer) {
        element.classList.add("correct");
        //add the indicator to correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;
    }
    else {
        element.classList.add("wrong");
        //add the indicator to correct mark
        updateAnswerIndicator("wrong");

        //if the naswer is wrong, shwo the correct answer
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}

//make all the options unclickable obce the user select an option
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator() {
    answersIndicatorContainer.innerHTML = "";
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType)
}

function next() {
    if (questionCounter === quiz.length) {
        quizOver();
    }
    else {
        getNewQuestion();
    }
}

function quizOver() {
    //hide quiz quizBox
    quizBox.classList.add("hide");
    //show quiz quizBox
    resultBox.classList.remove("hide");
    quizResult();
}

function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / quiz.length) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;

}

function goToHome() {
    alert("Logged out");
    //window.open("https://www.youtube.com/")
    window.open("/")

}

function startQuiz() {
    homeBox.classList.remove("hide");
    //show quiz quizBox
    setAvailableQuestions();
    //secondly we will call getNewQuestion()
    getNewQuestion();

    //to create indicator of answers
    answersIndicator();
}

/*window.onload = function () {

    startQuiz();
    //first we will set all the questions  in available questions array
    setAvailableQuestions();
    //secondly we will call getNewQuestion()
    getNewQuestion();

    //to create indicator of answers
    answersIndicator();
}*/