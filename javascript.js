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



function generateQuestion () {
    var currentQuestion = questions[currentIndex];

    var questionEl = document.getElementById("questionEl")

    questionEl.textContent = currentQuestion.question;

    var answerChoices = document.getElementById("Choices");
    var answerList = document.createElement("ul");
    var answerButtons = []

    for (var i = 0; i < currentQuestion.answers.length; i++ ) {
        var answerButton = document.createElement("button");
        answerButton.textContent = i + 1 +"." + currentQuestion.answers[i];
        answerButton.style.background = '#8822dd';
        answerButton.style.color = "white";

        var choices = document.createElement("li");
        answerChoices.appendChild(answerList);
        choices.appendChild(answerButton);
        answerList.appendChild(choices);

        answerButtons[i] = [answerButton.textContent]
        
    } 
    document.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        console.log(answerButtons)
        if (!isButton) {
            return;
        }
        else if (isButton || answerButtons[2] === i + 1 +"." + currentQuestion.answer) {
            console.log("yay");
    }
    })
   // function checkAnswer(event) {
      //  console.log(answerButton.textContent);
          //  if (event.target.textContent === i + 1 +"." + currentQuestion.answer){
             //   console.log("yay");
     //   }
     //   }
    currentIndex ++;

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
        generateQuestion()
    });
}