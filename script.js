// console.log('here are the qustions and answers:', questions)

// modal introduction
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

// create our events:

// listen for mousemove in window to open intro modal
window.addEventListener('mousemove', openModal)
// SET/ LINK TO FUNCTION TO MAKE IT GO AWAY ONCE YOU CLICK OUT
// add event listener for the close blick
closeBtn.addEventListener('click', closeModal);
// listen for outside click to close modal:
window.addEventListener('click', outsideClick);
// **** wasnt WORKING"
// modalBtn.removeEventListener('mousemove', closeModal)

// // listen for open click on modal button ** CAN DELETE, YES? 
// modalBtn.addEventListener('click', openModal);

// FUNCTION to open modal
// taking display value... 
function openModal() {
  modal.style.display = 'block';
}

// FUNCTION to close mmodal
// taking display value... 
function closeModal() {
  modal.style.display = 'none';
}

//// FUNCTION to close mmodal if clicked outside of modal
// taking display value... 
function outsideClick(evt) {
  if (evt.target == modal) { 
      modal.style.display = 'none';
      }
}
