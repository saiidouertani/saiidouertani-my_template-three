let section = document.querySelector(".stat");
let stats = section.querySelectorAll(".card h2");
let started = false;
window.onscroll = function () {
  console.log(section.offsetTop);
  console.log(window.scrollY);

  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      stats.forEach((element) => {
        counter(element);
      });
    }
    started = true;
  }
};

function counter(el) {
  let datcount = el.dataset.count;
  let coun = setInterval(function () {
    el.innerHTML++;
    if (el.innerHTML == datcount) {
      clearInterval(coun);
    }
  }, 2000 / datcount);
}
