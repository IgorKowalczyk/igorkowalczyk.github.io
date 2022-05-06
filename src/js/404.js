const toggletheme = document.querySelector('.theme-switch input[type="checkbox"]');
//localStorage.setItem("theme", "dark"); // Default theme
//const currenttheme = localStorage.getItem("theme");
if (localStorage.getItem("theme")) {
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