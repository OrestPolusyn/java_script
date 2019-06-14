"use strict";

const time = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const lap = document.querySelector('.js-laps');


startBtn.addEventListener("click", startLap);
resetBtn.addEventListener("click", resertTime);
lapBtn.addEventListener("click", lapsTime);

let min,
  sec,
  ms,
  laps,
  timerId = null,
  deltaTime = 0,
  startTime = Date.now(),
  dateNow = 0;

resetBtn.disabled = true;

function startLap() {
  if (startBtn.textContent == 'Start') {
    deltaTime = 0;
  }
  if (startBtn.textContent == 'Pause') {
    startBtn.textContent = 'Continue';
    clearInterval(timerId);
    return;
  }
  startBtn.textContent = 'Pause';
  startTime = Date.now() - deltaTime;
  timer();
  resetBtn.disabled = false;
}

function timer() {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    deltaTime = currentTime - startTime;
    const newTime = new Date(deltaTime);
    min = newTime.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }
    sec = newTime.getSeconds();
    if (sec < 10) {
      sec = `0${sec}`
    }
    ms = Number.parseInt(newTime.getMilliseconds() / 100);

    time.textContent = `${min}:${sec}.${ms}`;
  }, 100
  )
};

function resertTime() {
  clearInterval(timerId);
  time.textContent = `${min = '00'}:${sec = '00'}:${ms = '0'}`;
  resetBtn.disabled = true;
  startBtn.textContent = 'Start';
  lap.textContent = null;
}

function lapsTime() {
const lapTime = document.createElement('li');
lap.append(lapTime);
lapTime.textContent = time.textContent; 
}