/* (c) IGOR KOWALCZYK 2019. All rights reserved. */

function link1() {
window.open("https://aurolia-css.github.io");
}
function link2() { window.open("https://igorkowalczyk.github.io/color-picker");
}
function link3() {
window.open("https://github.com/igorkowalczyk/igorkowalczyk.github.io");
}

var preload = document.createElement('div');
preload.className = "preloader";
preload.innerHTML = '</div><div class="spinner"></div>';
document.body.appendChild(preload);
window.addEventListener('load', function() {
preload.className +=  ' fade';
setTimeout(function(){
preload.style.display = 'none';
},500);
})
