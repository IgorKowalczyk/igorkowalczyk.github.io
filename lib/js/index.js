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