
var score = 0;

var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#btn-start");
var questionListEl = document.querySelector("#question-list");
var questionContainer = document.querySelector("question-container");


var questions = [ 
{
    question: "This is question 1. What does CSS stand for?",
    options: ["A. Computer Sheet Style", "B. Cascading Style Sheets", "C. Crystal Style Sheet", "D. Cascading Sheet Style"],
    answer: "B. Cascading Style Sheets",
},
{
    question: "This is Question 2.",
    options: ["A. some text", "B. some text", "C. some text", "D. some text"],
    answer: "A. some text",
},
{
    question: "This is Question 3.",
    options: ["A. some text", "B. some text", "C. some text", "D. some text"],
    answer: "D. some text",
},
{
    question: "This is Question 4.",
    options: ["A. some text", "B. some text", "C. some text", "D. some text"],
    answer: "C. some text",
},
{
    question: "This is Question 5.",
    options: ["A. some text", "B. some text", "C. some text", "D. some text"],
    answer: "D. some text",
},
];

var startQuiz = function() {

    countdown();
    displayQuestion();
}

var displayQuestion = function() {
    for (var i = 0; i < questions.length; i++) {
        
        var listEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = questions[i];
        listEl.appendChild(buttonEl);
        questionListEl.appendChild(listEl);    
        buttonEl.onclick = nextQuestion   

        if (questions[i].option === true) {
            questions++;
            alert("Wrong!");
        } else if (questions[i].answer === true) {
            score++;
            questions++;
            alert("Correct!");
        }
    }
}

var countdown = function() {
    timeLeft = 75;

    var timer = setInterval(function() {
        if (timeLeft >= 1) {
            document.body.querySelector("#timer").textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = ''
            clearInterval(timer);
            //create end quiz function and to display and enter score with initials
        }
    }, 1000);

}

startBtnEl.onclick = startQuiz;