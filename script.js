// INTRO MODAL: 
let modal = document.getElementById('introModal');
let modalBtn = document.getElementById('modalBtn');
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// **** EVENT LISTENERS: ****
window.addEventListener('load', openModal)
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick (evt) {
  if (evt.target == modal) { 
      modal.style.display = 'none';
      }
}

// function 
// modal()
    // display:
    // "the right asnwer is:"
    // questions[i].right_answer

// STARTING THE GAME: 
// DECLARING ELEMENTS: 
const vamos = document.getElementById("vamos");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const image = document.getElementById("image");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");
const counter = document.getElementById("counter");
const timerBar = document.getElementById("timerBar");
const progress = document.getElementById("progress");
const scoreBox = document.getElementById("scoreContainer");

// QUESTIONS OBJECT:
let questions = [
    {
        question: "N.1 // The city's symbol is the ____________.",
        imgSrc: './images/N1Q.jpg',
        answerA: "pomegranate",
        answerB: "bull",
        answerC: "fig",
        answerD: "bougainvillea",
        correct: "A",
    }, 
    {
        question: "N.2 // Who were the first Catholic monarchs of Spain?",
        imgSrc: './images/N2Q.jpg',
        answerA: "Queen Joanna and King Philip I",
        answerB: "Queen Joanna and King Ferdinand II",
        answerC: "Queen Isabella and King Philip I",
        answerD: "Queen Isabella I and King Ferdinand II",
        correct: "D",
    },
    {
        question: "N.3 // Which explorer set sail out of Granada?",
        imgSrc: './images/N3Q.jpg',
        answerA: "Ferdinand Magellan",
        answerB: "Christopher Columbus",
        answerC: "Jacques Cartier",
        answerD: "Don Hernán Cortés",
        correct: "B",
    },
    {
        question: "N.4 // Granada is located at the foot of which mountain range?",
        imgSrc: './images/N4Q.jpg',
        answerA: "Serra de Tramuntana",
        answerB: "Sierra de Grazalema",
        answerC: "Sierra Nevada",
        answerD: "Montserrat",
        correct: "C",
    },
    {
        question: "N.5 // Which iconic Spanish author was from Granada?",
        imgSrc: './images/N5Q.jpg',
        answerA: "Antonio Machado",
        answerB: "Miguel de Cervantes",
        answerC: "Federico García Lorca",
        answerD: "Lope de Vega",
        correct: "C",
    },
    {
        question: "N.6 // In 1330, Granada ranked the ___ most populated city in Europe.",
        imgSrc: './images/N6Q.jpg',
        answerA: "1st",
        answerB: "24th",
        answerC: "3rd",
        answerD: "7th",
        correct: "A",
    },
    {
        question: "N.7 // The coast of Granada is called Costa Tropical. Select its main municipality.",
        imgSrc: './images/N7Q.jpg',
        answerA: "Almuñécar",
        answerB: "Salobreña",
        answerC: "Motril",
        answerD: "All of the above",
        correct: "D",
    },
    {
        question: "N.8 // Granada was under whose rule prior to its monarchy?",
        imgSrc: './images/N8Q.jpg',
        answerA: "Islamic",
        answerB: "Roman",
        answerC: "Celtic",
        answerD: "Iberian",
        correct: "A",
    },
    {
        question: "N.9 // Granada's La Alhambra sdf .",
        imgSrc: './images/N9Q.jpg',
        answerA: "correct",
        answerB: "wrong",
        answerC: "wrong",
        answerD: "wrong",
        correct: "A",
    },
    {
        question: "N.10 // In Granada, you receive this with every drink.",
        imgSrc: './images/N10Q.jpg',
        answerA: "a second drink",
        answerB: "a free entrée",
        answerC: "a tapa",
        answerD: "a tip",
        correct: "C",
    },
    {
        question: "N.11 // On work days, businesses close for this.",
        imgSrc: './images/N11Q.jpg',
        answerA: "mass",
        answerB: "soccer",
        answerC: "business meetings",
        answerD: "siesta",
        correct: "D",
    }
    ]; 

// VARIABLES
    const lastQuestion = questions.length -1;
    let runningQuestion = 0;
    // GET TIMER:
    let count = 0;
    const questionTime = 10;
    const timerWidth = 150;
    const timerUnit = timerWidth/ questionTime;
    let TIMER; 
    let score = 0;

// PRINT QUESTIONS:
    function printQuestion () {
        let q = questions[runningQuestion];

        question.innerHTML = "<p>" + q.question + "</p>";
        image.innerHTML = "<img src=" + q.imgSrc+ ">";
        answerA.innerHTML = q.answerA;
        answerB.innerHTML = q.answerB;
        answerC.innerHTML = q.answerC;
        answerD.innerHTML = q.answerD;
    }

// EVENT LISTENER TO LISTER FOR START BUTTON
vamos.addEventListener('click', startGame);

// MAKE FUNCTION TO  startGAME: 
// click vamos --> print first question/ quiz
// call progress + counter in function
// run timer
function startGame() {
    vamos.style.display = "none";
    printQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

// CREATE FUNCTION TO TRACK PROGRESS: -- call under startGame()
// make prog boxes js:
function renderProgress() {
    for (let index = 0; index <= lastQuestion; index++) {
        progress.innerHTML += "<div class='prog' id=" + index + "></div>";
    }
}

function renderCounter () {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timerBar.style.width = count * timerUnit + "px";
        count++;
    } else {
        count = 0;
        // answer is incorrect:
        answerIsIncorrect();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            printQuestion();
        } else {
        // end the quiz and show the score:
        clearInterval(TIMER);
        scoreRender();
        }
    }
 }
// FUNCTION TO CHECK ANSWER
// what question we're at then comapre chosen VS right answer=>
//  if selected = correct
        //when correct, then will need to change progress bar color 
//       correct modal for corresponding Question appears
//  if selected = incorrects 
        // when incorrect, then will need to change progress bar color 
//      modal(questions[i].right_answer)
//       incorrect modal for corresponding Question appears
// THEN end quiz & display the score
 function checkAnswer (answer) {
     if( answer == questions[runningQuestion].correct) { 
         score ++;
         answerIsCorrect();
     } else {
         answerIsIncorrect();
     }
     count = 0;
     if (runningQuestion < lastQuestion) {
         runningQuestion++;
         printQuestion();
     } else {
         // end the quiz and show the score:
         clearInterval(TIMER);
         scoreRender();
     }
 }

 // FUNCTION CORRECT:
 function answerIsCorrect () {
    document.getElementById(runningQuestion).style.backgroundColor = "black";
 }

 // FUNCTION INCORRECT: 
 function answerIsIncorrect () {
    document.getElementById(runningQuestion).style.backgroundColor = "white";
 }

 // FUNCTION TO RENDER SCORE:
 function scoreRender () {
     scoreBox.style.display = "block";
     
// need to calculate the amlount of quewsions ths player answered:
     const scorePercent = Math.round(100 * score / questions.length);

 }
