// console.log('here are the qustions and answers:', questions)

// 1. MODAL INTRODUCTION 
// KIRTEN, REWRITE THIS: 
// first question: load startgame()
    // +1 to call the next question
    // (skip if second question) load first question in the array: get the first index
    // then load question onto the DOM/HTML => load the options to buttons

// listen for a click on the answers => function waits for user to answer
    // store the input => compare? call right() or wrong()
    // update the score


// right()
    // if right: modal here => call startgame()

// wrong()
    // if wrong: then that: modal here => startgame()


//MODAL: 

// get modal element
let modal = document.getElementById('introModal');
// get the open modal button:
let modalBtn = document.getElementById('modalBtn');
// get close button:
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// EVENT LISTENERS:
// listen for mousemove in window to open intro modal
window.addEventListener('load', openModal)
// SET/ LINK TO FUNCTION TO MAKE IT GO AWAY ONCE YOU CLICK OUT
// add event listener for the close blick
closeBtn.addEventListener('click', closeModal);
// listen for outside click to close modal:
window.addEventListener('click', outsideClick);
// **** wasnt WORKING"
// modalBtn.removeEventListener('mousemove', closeModal)
// // listen for open click on modal button ** CAN DELETE, YES? 
// modalBtn.addEventListener('click', openModal);

// FUNCTION FOR CLICK ON INTRO MODAL CLOSE BTN OR OUTSIDE CLICK, COMMENCE GAME/ PRINT Q1

// FUNCTION to open modal
// taking display value... 
function openModal() {
  modal.style.display = 'block';
}

// FUNCTION to close mmodal
// taking display value... 
function closeModal() {
  modal.style.display = 'none';
    startGame();
}

//// FUNCTION to close mmodal if clicked outside of modal
// taking display value... 
function outsideClick(evt) {
  if (evt.target == modal) { 
      modal.style.display = 'none';
      startGame();
      }
}

// let questionBox = document.get.... (get the top box) (for the question)
// let answerbox1 = document.get.... (get answer1) 
// let answerbox2 = document.get.... (get answer2)
// document.get.... (get answer3)
// document.get.... (get answer4)

// questions[i].quesiton => this will give you the question to that coresponding i
// questions[i].wrong_answers.push(question[i].right_answer)
    // gonnahave to shuffle array of wrong asnwers, because .push pushes to the end of every array

// START GAME :
function startGame () {
    console.log('its starting');
    // questionbox.innerHTML = questions[0].question
    // print question one + corresponding possible answers as buttons
    // answerbox1.innerHTML = questions[0].wrongs_answers[0]
    // answerbox2.innerHTML = questions[0].wrongs_answers[1]
    // answerbox3.innerHTML = questions[0].wrongs_answers[2]
}

// add event listener to each button 
//      call function with selected answer

// checker()
// what question we're at then comapre chosen VS right answer=>
//  if selected = correct
//       correct modal for corresponding Question appears
//  if selected = incorrects 
//      modal(questions[i].right_answer)
//       incorrect modal for corresponding Question appears

// function 
// modal()
    // display:
    // "the right asnwer is:"
    // questions[i].right_answer

