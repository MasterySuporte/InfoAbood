
function darkMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode Ligado";
}
function lightMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Light Mode Ligado";
}
