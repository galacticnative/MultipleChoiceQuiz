
var score = 0;

var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#btn-start");
var questionsEl = document.querySelector("#questions");
var questionContainer = document.querySelector("#question-container");
var quizEl = document.querySelector("#quiz");



var questions = [ 
{
    question: "This is question 1. What does CSS stand for?",
    options: ["Computer Sheet Style", "Cascading Style Sheets", "Crystal Style Sheet", "Cascading Sheet Style"],
    answer: "Cascading Style Sheets",
},
{
    question: "This is Question 2. String Values must be enclosed within _____ when being assigned to variables.",
    options: ["curly brackets", "commas", "quotes", "parentheses"],
    answer: "curly brackets",
},
{
    question: "This is Question 3. Arrays in JavaScript can be used to store _____.",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
},
{
    question: "This is Question 4. What coding language is used in at least 95% of the world's internet?",
    options: ["css", "French", "JavaScript", "boolean"],
    answer: "JavaScript",
},
{
    question: "This is Question 5. Commonly used data types do NOT include:",
    options: ["strings", "alerts", "numbers", "booleans"],
    answer: "booleans",
},
];

//functin to creat options list and display question
var startQuiz = function() {
    
    var questionType = questions[questionStart].question;
    var answerType = questions[questionStart].answer;
    var optionsType = questions[questionStart].options;
    var ulEl = document.createElement("ul");

    questionsEl.innerHTML = '';

    for (var i=0; i < optionsType.length; i++) {
        if (i < optionsType.length) {

            var listEl = document.createElement("li");
            var buttonEl = document.createElement("button");
            listEl.textContent = optionsType[i];
            listEl.appendChild(buttonEl);
            ulEl.appendChild(listEl);
            buttonEl.onclick = selectOption
        }
    }
    quizEl.textContent = questionType;  
    
    questionsEl.appendChild(ulEl);
  
}

//start index at 0
var questionStart = 0;

var selectOption = function() {
    if(questions[questionStart].answer === true) {
        score++;
        questionStart++;
        startQuiz();
    } else {
        questionStart++;
        startQuiz();
    }
}

//end of countdown function calls startQuiz function
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

    startQuiz();
}

//once start quiz button is selected, the countdown function begins
startBtnEl.onclick = countdown;