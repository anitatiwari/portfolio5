import './scss/main.scss';
import '.scss/output.scss';

document.getElementById("menu").addEventListener("click", menuOnClick);;



function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
