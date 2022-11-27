const newYear = "1/1/2023";

const daysElem = document.querySelector('.day');
const hourElem = document.querySelector('.hour');
const minuteElem = document.querySelector('.minute');
const secondElem = document.querySelector('.seconds');

function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - nowDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElem.innerHTML = formatTime(days);
  hourElem.innerHTML = formatTime(hours);
  minuteElem.innerHTML = formatTime(minutes);
  secondElem.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time >= 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);
