const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const digits = document.querySelector('.digits');
const digit = document.querySelectorAll('.digit');
const tenMs = document.querySelector('#')


// Need to run a loop through the tens of millseconds (0-9) to get to hundreds of milliseconds
// Run the same loop through hundreds (0-9) to get to seconds
// Same loop to get to tens of seconds, but stop on 10 and turn red.
// Start button should begin counting and iterating through the functions
// Start can turn to stop onclick and vice versa
// Reset button sets timer back to starting position
// setInterval() and Date.now() should be used.
// 1000ms ='s 1 second.


function addTime() {
  for (let tms = 0; tms >= 100; tms++) {
    for (let seconds = 0; seconds >= 10; seconds++) {
    }
  }
}

startBtn.setAttribute('click').textConent = 'Stop';
startBtn.onclick = startTimer;

resetBtn.onclick = function () {
  digits.textContent = "--:--";
  seconds = 0; ms = 0;
}