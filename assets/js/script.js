var score = []
var questions = []
var timer = 0;

timerEl = document.getElementById('timer');
startBtn = document.getElementById('btn-start');
questionsEl = document.getElementById('question-page')


var questions = [ 
{
    QuestionOne = "This is question 1. What does CSS stand for?",
    AnswerOne = "B. Cascading Style Sheets",
    OptionOne = "A. Computer Sheet Style",
    OptionTwo = "B. Cascading Style Sheets",
    OptionThree = "C. Crystal Style Sheet",
    OptionFour = "D. Cascading Sheet Style",
},
{
    QuestionTwo = "This is Question 2.",
    AnswerTwo = "A. is the answer",
    OptionOne = "A. some text",
    OptionTwo = "B. some text",
    OptionThree = "C. some text",
    OptionFour = "D. some text",
},
{
    QuestionThree = "This is Question 3.",
    AnswerThree = "D. is the answer",
    OptionOne = "A. some text",
    OptionTwo = "B. some text",
    OptionThree = "C. some text",
    OptionFour = "D. some text",
},
];    

var timer = function() {
    var timeLeft = 150;

    var timeInterval = setInterval(function() {
        if (timeLeft === 150) {
            timeInterval.textContent = timeLeft + " seconds remain";
            timeLeft--;
            document.getElementById('timer').innerHTML = timeInterval;
            //displayQuestion();s
        }
        else {
            if (timeLeft === 0) {
                timerEl.textContent = '';
                clearInterval(timeInterval);
            }
        }
    }, 1000);
}

// var displayQuestion = function() {
//     var questionCount = 0;

//     var questInterval = setInterval(function() {
//         if (questions[questionCount] === undefined) {
//             clearInterval(questInterval);
//         }
//         else {
//             questionsEl.textContent = sentence[questionCount];
//             questionCount++
//         }
//     }, 1000);
// }

startBtn.onclick = timer;