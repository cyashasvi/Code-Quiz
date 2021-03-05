//score = score for each right answer
// counter - number of attempts
// timer - timer for the quiz, time reduces if the question is wrong
// name - name of the person to store(will be an input)
// var object with question and correct answer, and the score
// have to store the variables as a JSON Object

var starterButton= document.getElementById("starter");

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [" strings"," booleans", " alerts", " numbers"],
        answer: [" alerts"]
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answers: [" quotes"," curly brackets", " parentheses", " square brackets"],
        answer: [" square brackets"]
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        answers: [" numbers and strings"," other arrays", " booleans", " all of the above"],
        answer: [" all of the above"]
    },
    {
        question: "String values must be enclosed within ____  when being assigned to variables.",
        answers: [" commas"," curly brackets", " quotes", " parentheses"],
        answer: [" quotes"]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [" Javascript"," terminal/bash", " for loops", " console.log"],
        answer: [" console.log"]
    },
]

var currentIndex = 0;

var seconds = 60;

var score = 0; 

document.getElementById('hs').textContent = 'High Score: ' + score;

function timer() {
   
    var timer = setInterval(function () {
        document.getElementById("timer").textContent = 'Timer: ' + seconds;
        seconds--;
        document.getElementById('hs').textContent = 'High Score: ' + score;
        if (seconds < 0) {
            clearInterval(timer);
        }
    }, 1000)

}

function generateQuestion () {
    var currentQuestion = questions[currentIndex];

    var questionEl = document.getElementById("questionEl")

    questionEl.textContent = currentQuestion.question;

    var answerChoices = document.getElementById("Choices");
    var answerList = document.createElement("ul");

    for (var i = 0; i < currentQuestion.answers.length; i++ ) {
        var answerButton = document.createElement("button");
        answerButton.textContent =  currentQuestion.answers[i];
        answerButton.style.background = '#8822dd';
        answerButton.style.color = "white";
        answerButton.id = i; //adds unique id to each button, allowing me to add an eventlistener to each button

        var choices = document.createElement("li");
        answerChoices.appendChild(answerList);
        choices.appendChild(answerButton);
        answerList.appendChild(choices);
        if (i == 4){
            Final();
            break;
        }

        
    } 
    document.getElementById('0').addEventListener('click',checkAnswer)
    document.getElementById('1').addEventListener('click',checkAnswer)  
    document.getElementById('2').addEventListener('click',checkAnswer)  
    document.getElementById('3').addEventListener('click',checkAnswer)

    function removeAllAnswers(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function checkAnswer(event) {
        var wrong = document.createElement("p");
        const AllAnswers = document.querySelector('#Choices');
        
        if (event.target.textContent == currentQuestion.answer){
            removeAllAnswers(AllAnswers);
            generateQuestion();
            score += 20;
            localStorage.setItem('highscore', score)

        }
        else if (event.target.textContent !== currentQuestion.answer) {
            wrong.textContent = "Wrong!"
             wrong.style.color = 'red';
            removeAllAnswers(AllAnswers);
            generateQuestion();
            seconds = seconds - 10;
        }
        else if (seconds == 0) {
           Final();
        }
        }
    currentIndex ++;
    
    function Final() {
        questionEl.textContent = "Final Results";
        var finalScore = document.createElement('h3');
        finalScore.textContent = localStorage.getItem('highscore');
        finalScore.appendChild(answerChoices);
    }
}

window.onload = function() {
    const starterButton
     = document.getElementById("starter")
    starterButton.addEventListener("click",() => { 
        var removeP = document.getElementById("Para");//removes the initial paragraph
        removeP.remove()
        removeP = document.getElementById("start");
        removeP.remove();
        starterButton.remove()
        generateQuestion();
        timer()
    });
}