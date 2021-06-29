const toggletheme = document.querySelector('.theme-switch input[type="checkbox"]');
const currenttheme = localStorage.getItem("theme");
if (currenttheme) {
 document.documentElement.setAttribute("data-theme", currenttheme);
 if (currenttheme === "dark") {
  toggletheme.checked = true;
 }
}
function switchtheme(e) {
 if (e.target.checked) {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
 } else {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
 }
}
toggletheme.addEventListener("change", switchtheme, false);

var scrollposition = window.scrollY;
var logocontainer = document.getElementsByClassName("nav")[0];
window.addEventListener("scroll", function () {
 scrollposition = window.scrollY;
 if (scrollposition >= 40) {
  logocontainer.classList.add("nav-scrolled");
 } else {
  logocontainer.classList.remove("nav-scrolled");
 }
});

document.addEventListener("click", function (event) {
 if (event.target.tagName !== "A" || !event.target.href || event.target.target == "_blank" || event.target.classList.contains("no-fade")) return;
 event.preventDefault();
 var link = event.target;
 document.body.style.opacity = 0;
 document.body.addEventListener("transitionend", function () {
  location.href = link.href;
 });
});

let images = document.querySelectorAll(".lazy");
function onIntersection(imageEntites) {
 imageEntites.forEach((image) => {
  if (image.isIntersecting) {
   observer.unobserve(image.target);
   image.target.src = image.target.dataset.src;
   image.target.onload = () => image.target.classList.remove("lazy");
  }
 });
}
let observer = new IntersectionObserver(onIntersection);
images.forEach((image) => observer.observe(image));

var date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
