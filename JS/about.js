const counter = document.querySelectorAll(".results .content .counter");
const section = document.querySelector(".results");
let started = false;

window.onscroll = function () {
  if (window.scrollY + 400 >= section.offsetTop) {
    if (!started) {
      counter.forEach((el) => startCount(el));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.count;
  let duration = Math.floor(5800 / goal);
  const count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) clearInterval(count);
  }, duration);
}
