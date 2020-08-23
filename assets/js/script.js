
var time = 150;
var score = 0;

var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#btn-start");
var questionListEl = document.querySelector("#question-list");


var questions = [ 
{
    question: "This is question 1. What does CSS stand for?",
    option: "A. Computer Sheet Style",
    answer: "B. Cascading Style Sheets",
    option: "C. Crystal Style Sheet",
    option: "D. Cascading Sheet Style",
},
{
    question: "This is Question 2.",
    answer: "A. some text",
    option: "B. some text",
    option: "C. some text",
    option: "D. some text",
},
{
    question: "This is Question 3.",
    option: "A. some text",
    option: "B. some text",
    option: "C. some text",
    answer: "D. some text",
},
{
    question: "This is Question 4.",
    option: "A. some text",
    option: "B. some text",
    answer: "C. some text",
    option: "D. some text",
},
{
    question: "This is Question 5.",
    option: "A. some text",
    option: "B. some text",
    option: "C. some text",
    answer: "D. some text",
},
];

var startQuiz = function() {
    
    for (var i = 0; i < questions.length; i++) {
        var listEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        listEl.textContent = questions[i];
        listEl.appendChild(buttonEl);
        buttonEl.appendChild(questionListEl);

        if (questions[i].option === true) {
            score--;
            questions++;
            alert("Wrong!");
        } else (questions[i].answer === true) {
            score++;
            questions++;
            alert("Correct!");
        }
        
    }
    timer();
}

var timer = function() {
    time--;
    timerEl.textContent = time
    if (time === 0) {
        clearInterval(timerStart);
    }
}
var timerStart = setInterval(timer, 1000);

startBtnEl.addEventListener("click", startQuiz());