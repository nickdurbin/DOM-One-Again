// Need to run a loop through the tens of milliseconds (0-9) to get to hundreds of milliseconds
// Run the same loop through hundreds (0-9) to get to seconds
// Same loop to get to tens of seconds, but stop on 10 and turn red.
// Start button should begin counting and iterating through the functions
// Start can turn to stop onclick and vice versa
// Reset button sets timer back to starting position
// setInterval() and Date.now() should be used.
// 1000ms ='s 1 second.
// Change all digit element classes to 0

const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const digits = document.querySelector('.digits');
const digit = document.querySelectorAll('.digit');
const tenMs = document.getElementById('msTens');
const hundredMs = document.getElementById('msHundreds');
const seconds = document.getElementById('secondOnes');
const tenSeconds = document.getElementById('secondTens');

startBtn.onclick = function startTimer () {
  init();
  
  function init () {
    let ms = 0;
    tenSeconds.innerHTML = "0";
    seconds.innerHTML = "0";
    hundredMs.innerHTML = "0";
    tenMs.innerHTML = "0";
    
    const timerInterval = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        endTimer(timerInterval); 
      }
      updateTimer(ms);
    }, 10);
  }
  
  function increment (string) {
    let number = Number(string) + 1;
    return number.toString();
  }

  function endTimer (intervalId) {
    clearInterval(intervalId);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit");
    })
  }

  function updateTimer (ms) {
    if (ms === 10000) {
      tenSeconds.innerHTML = "1";
      seconds.innerHTML = "0";
      hundredMs.innerHTML = "0";
      tenMs.innerHTML = "0";
    } else if (ms % 1000 === 0) {
      seconds.innerHTML = increment(seconds.innerHTML);
      hundredMs.innerHTML = "0";
      tenMs.innerHTML = "0";
    } else if (ms % 100 === 0) {
      hundredMs.innerHTML = increment(hundredMs.innerHTML);
      tenMs.innerHTML = "0";
    } else {
      tenMs.innerHTML = increment(tenMs.innerHTML);
    }
  }
}

// startBtn.addEventListener('onclick', function (){
//   if (startBtn.getAttribute("button") == startBtn.innerHTML) {
//     startBtn.innerHTML = StartBtn.getAttribute("button");
//   } else {
//     startBtn.setAttribute("button", startBtn.innerHTML);
//     startBtn.innerHTML = startBtn.getAttribute("button");
//   }
// }, false);

resetBtn.onclick = function () {
  digits.textContent = "--:--";
  seconds = 0; ms = 0;
}