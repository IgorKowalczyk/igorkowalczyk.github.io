/* (c) IGOR KOWALCZYK. All rights reserved. */

const toggletheme = document.querySelector('.theme-switch input[type="checkbox"]');
const currenttheme = localStorage.getItem('theme');
const meta = document.querySelector('meta[name="theme-color"]');

if (currenttheme) {
document.documentElement.setAttribute('data-theme', currenttheme);
if (currenttheme === 'dark') {
toggletheme.checked = true;
}
}
function switchtheme(e) {
if (e.target.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
meta.setAttribute("content", "#222");
localStorage.setItem('theme', 'dark');
}
else {
document.documentElement.setAttribute('data-theme', 'light');
meta.setAttribute("content", "#ffffff");
localStorage.setItem('theme', 'light');
}
}
toggletheme.addEventListener('change', switchtheme, false);

var scrollposition = window.scrollY;
var logocontainer = document.getElementsByClassName('nav')[0];
window.addEventListener('scroll', function() {
scrollposition = window.scrollY;
if (scrollposition >= 40) {
logocontainer.classList.add('nav-scrolled');
} else {
logocontainer.classList.remove('nav-scrolled');
}
});

document.addEventListener('click', function(event) {
if (event.target.tagName !== "A" || !event.target.href || event.target.target == "_blank") return;
event.preventDefault();
var link = event.target;
document.body.style.opacity = 0;
document.body.addEventListener("transitionend", function() {
location.href = link.href;
});
});

let images = [].slice.call(document.querySelectorAll("img.lazy"));
let active = false;
const load = function() {
if (active === false) {
active = true;
setTimeout(function() {
images.forEach(function(image) {
if (!image.dataset.src) {
return image.classList.remove("lazy");
}
if ((image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0) && getComputedStyle(image).display !== "none") {
image.src = image.dataset.src;
image.classList.remove("lazy");
console.log("Action!");
images = images.filter(function(image) {
return image !== image;
});
if (images.length === 0) {
document.removeEventListener("scroll", load);
window.removeEventListener("resize", load);
window.removeEventListener("orientationchange", load);
}
}
});
active = false;
}, 200);
}
}
load();

var date = document.querySelector(".date");
date.innerHTML = (new Date().getFullYear());
