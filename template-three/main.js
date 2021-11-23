let section2 = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .box .number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section2.offsetTop - 400) {
    if (!started) {
      numbers.forEach(num => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 200 / goal);
}

let counter = setInterval(() => {
  let countDownDate = new Date("jan 1, 2022 00:00:00").getTime();
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .info .time .unit span.days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .info .time .unit span.hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .info .time .unit span.minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .info .time .unit span.seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
