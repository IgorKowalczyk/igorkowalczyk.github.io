/* (c) IGOR KOWALCZYK. All rights reserved. */

const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);
var easteregg = $(".easteregg"),
 game = $(".game", easteregg),
 confirmButton = $(".confirm", easteregg),
 upButton = $(".controls .up", game),
 downButton = $(".controls .down", game),
 startButton = $(".start", game),
 closeButton = $(".close", game);
var ball = {
  elem: $(".ball", game),
  x: 0,
  y: 0,
  top: 0,
  left: 0,
 },
 one = {
  elem: $(".paddle.one", game),
  y: 0,
  top: 0,
  score: 0,
 },
 two = {
  elem: $(".paddle.two", game),
  y: 0,
  score: 0,
 },
 interval;

function init() {
 if (game.classList.contains("idle")) {
  one.y = game.offsetHeight / 2 - one.elem.offsetHeight / 2;
  two.y = game.offsetHeight / 2 - one.elem.offsetHeight / 2;
  start();
  game.classList.remove("idle");
  game.classList.add("init");
 }
}
startButton.addEventListener("click", init);

confirmButton.addEventListener("click", (e) => {
 easteregg.classList.add("show-game");
});

closeButton.addEventListener("click", (e) => {
 easteregg.classList.add("hide-game");
 easteregg.classList.remove("show-game");
 setTimeout(() => easteregg.classList.remove("hide-game"), 100);
});

function start() {
 ball.x = game.offsetWidth / 2 - ball.elem.offsetWidth / 2;
 ball.y = game.offsetHeight / 2 - ball.elem.offsetHeight / 2;
 ball.top = Math.random() * 2 + 2;
 //ball.left = ((Math.random() < .5) ? 1 : -1) * (Math.random() * 2 + 2);
 ball.left = 1 * Math.random() * 2 + 2;

 interval = window.setInterval(render, 1000 / 60);
}

function render() {
 one.y += one.top;
 two.y = ball.y - two.elem.offsetHeight / 2;

 ball.x += ball.left;
 ball.y += ball.top;

 if (one.y <= 0) {
  one.y = 0;
 }

 if (two.y <= 0) {
  two.y = 0;
 }

 if (one.y >= game.offsetHeight - one.elem.offsetHeight) {
  one.y = game.offsetHeight - one.elem.offsetHeight;
 }

 if (two.y > game.offsetHeight - two.elem.offsetHeight) {
  two.y = game.offsetHeight - two.elem.offsetHeight;
 }

 if (ball.y <= 0 || ball.y >= game.offsetHeight - ball.elem.offsetHeight) {
  ball.top = -ball.top;
 }

 if (ball.x <= one.elem.offsetWidth - 2) {
  if (ball.y + ball.elem.offsetHeight / 2 > one.y && ball.y + ball.elem.offsetHeight / 2 < one.y + one.elem.offsetHeight) {
   ball.left = -ball.left;
  } else {
   two.score++;
   setTimeout(() => game.classList.add("idle"), 100);
   clearInterval(interval);
  }
 }

 if (ball.x >= game.offsetWidth - ball.elem.offsetWidth - (two.elem.offsetWidth - 2)) {
  if (ball.y + ball.elem.offsetHeight / 2 > two.y && ball.y + ball.elem.offsetHeight / 2 < two.y + two.elem.offsetHeight) {
   ball.left = -ball.left;
  } else {
   one.score++;
   setTimeout(() => game.classList.add("idle"), 100);
   clearInterval(interval);
  }
 }

 one.elem.style.setProperty("--y", one.y + "px");
 two.elem.style.setProperty("--y", two.y + "px");
 ball.elem.style.setProperty("--x", ball.x + "px");
 ball.elem.style.setProperty("--y", ball.y + "px");
}

document.addEventListener(
 "keydown",
 (e) => {
  e.preventDefault();
  init();
  if (e.keyCode == 38 || e.which == 38) {
   one.top = -8;
  }
  if (e.keyCode == 40 || e.which == 40) {
   one.top = 8;
  }
 },
 false
);

document.addEventListener(
 "keyup",
 (e) => {
  e.preventDefault();
  init();
  if (e.keyCode == 38 || e.which == 38) {
   one.top = 0;
  }
  if (e.keyCode == 40 || e.which == 40) {
   one.top = 0;
  }
 },
 false
);

upButton.onmousedown = (e) => {
 init();
 one.top = -8;
};

downButton.onmousedown = (e) => {
 init();
 one.top = 8;
};

upButton.onmouseup = (e) => {
 one.top = 0;
};

downButton.onmouseup = (e) => {
 one.top = 0;
};

upButton.ontouchstart = (e) => {
 init();
 one.top = -8;
};

downButton.ontouchstart = (e) => {
 init();
 one.top = 8;
};

upButton.ontouchend = (e) => {
 one.top = 0;
};

downButton.ontouchend = (e) => {
 one.top = 0;
};

const toggletheme = document.querySelector('.theme-switch input[type="checkbox"]');
const currenttheme = localStorage.getItem("theme");
const meta = document.querySelector('meta[name="theme-color"]');
if (currenttheme) {
 document.documentElement.setAttribute("data-theme", currenttheme);
 if (currenttheme === "dark") {
  toggletheme.checked = true;
 }
}
function switchtheme(e) {
 if (e.target.checked) {
  document.documentElement.setAttribute("data-theme", "dark");
  meta.setAttribute("content", "#222");
  localStorage.setItem("theme", "dark");
 } else {
  document.documentElement.setAttribute("data-theme", "light");
  meta.setAttribute("content", "#ffffff");
  localStorage.setItem("theme", "light");
 }
}
toggletheme.addEventListener("change", switchtheme, false);

document.addEventListener("click", function (event) {
 if (event.target.tagName !== "A" || !event.target.href || event.target.target == "_blank" || event.target.classList == "anchor-link") return;
 event.preventDefault();
 var link = event.target;
 document.body.style.opacity = 0;
 document.body.addEventListener("transitionend", function () {
  location.href = link.href;
 });
});

var date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
