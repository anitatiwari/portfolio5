import './scss/main.scss'

document.getElementById("menu").addEventListener("click", menuOnClick);;



function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
