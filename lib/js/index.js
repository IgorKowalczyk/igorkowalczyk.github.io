/* (c) IGOR KOWALCZYK. All rights reserved. */

function link1() {
window.open("https://igorkowalczyk.github.io/fest");
}
function link2() {
window.open("https://igorkowalczyk.github.io/color-picker");
}
function link3() {
window.open("https://github.com/igorkowalczyk/igorkowalczyk.github.io");
}
function link4() {
window.open("https://igorkowalczyk.github.io/blog");
}
function link5() {
window.open("https://igorkowalczyk.github.io/daycycle");
}
function link6() {
window.open("https://igorkowalczyk.github.io/txt");
}

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

const toggletheme = document.querySelector('.theme-switch input[type="checkbox"]');
const currenttheme = localStorage.getItem('theme');
if (currenttheme) {
document.documentElement.setAttribute('data-theme', currenttheme);
if (currenttheme === 'dark') {
toggletheme.checked = true;
}
}
function switchtheme(e) {
if (e.target.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');
}
else {
document.documentElement.setAttribute('data-theme', 'light');
localStorage.setItem('theme', 'light');
}
}
toggletheme.addEventListener('change', switchtheme, false);

document.addEventListener('click', function(event) {
if (!event.target.classList.contains("link-fade")) return; 
event.preventDefault();
var link = event.target;
document.body.style.opacity = 0;
document.body.addEventListener("transitionend", function() {
location.href = link.href;
});
});