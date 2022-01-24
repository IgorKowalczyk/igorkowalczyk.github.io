const toggletheme = document.querySelector('.theme-switch input[type="checkbox"]');
//localStorage.setItem("theme", "dark"); // Default theme
//const currenttheme = localStorage.getItem("theme");
if(localStorage.getItem("theme")) {
currenttheme = localStorage.getItem("theme");
} else {
currenttheme = "dark";
}

if (currenttheme) {
 document.documentElement.setAttribute("data-theme", currenttheme);
 if (currenttheme === "dark") {
  toggletheme.checked = false;
 }
}
function switchtheme(e) {
 if (e.target.checked) {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
 } else {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
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
