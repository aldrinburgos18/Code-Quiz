//array of questions and answers
var questions = [
    {
        question: 'Commonly used data types DO Not Include:',
        answer: [
          {text: '1. strings', correct: false},
          {text: '2. booleans', correct: false},
          {text: '3. alerts', correct: true},
          {text: '4. numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed with ___________.',
        answer: [
          {text: '1. quotes', correct: false},
          {text: '2. curly brackets', correct: true},
          {text: '3. parenthesis', correct: false},
          {text: '4. square brackets', correct: false}
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store ___________.',
        answer: [
          {text: '1. numbers and strings', correct: false},
          {text: '2. other arrays', correct: false},
          {text: '3. booleans', correct: false},
          {text: '4. all of the above', correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within ___________ when being assigned to variables.',
        answer: [
          {text: '1. commas', correct: false},
          {text: '2. curly brackets', correct: false},
          {text: '3. quotes', correct: true},
          {text: '4. parenthesis', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
          {text: '1. JavaScript', correct: false},
          {text: '2. terminal/bash', correct: false},
          {text: '3. for loops', correct: false},
          {text: '4. console.log', correct: true}
        ]
    },
];

//variables
var startButton = document.getElementById('start-btn');
var startContainerEl = document.getElementById('start-container');
var quizContainerEl = document.getElementById('question-container');
var quizTimer = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-buttons');
var score = timer;


let shuffledQuestions, currentQuestionIndex


function startQuiz () {
  //hide start container and show quiz container
  startContainerEl.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  quizContainerEl.classList.remove('hide');
  console.log("Started");
  setQuestion()
}

function setQuestion () {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answer.forEach(answer => {
    var button = document.createElement('button')
    
    button.innerText = answer.text
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    answerButtonsEl.appendChild(button);
  })
}

function timer() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        quizTimer.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        quizTimer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        clearInterval(timeInterval);
        alert("The time has ran out!")
      }
    }, 1000);
  }

//timer starts when 'start' button is clicked
startButton.addEventListener('click', startQuiz);
startButton.onclick = timer;