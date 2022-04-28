

document.getElementById("menu").addEventListener("click", menuOnClick);;



function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
let theme = localStorage.getItem('data-theme');
const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
}
// Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});
// // storing the theme on the user's machine
// localStorage.setItem('theme', 'dark');

// //accessed the user's machine theme
// localStorage.getItem('theme');
// // dark
// const toggle = document.getElementById("toggle");
// const refresh = document.getElementById("refresh");
// const theme = window.localStorage.getItem("theme");

// /* checks if the theme stored in localStorage is dark
// if yes apply the dark theme to the body */
// if (theme === "dark") document.body.classList.add("dark");

// // event listener stops when the change theme button is clicked
// toggle.addEventListener("click", () => {
//    document.body.classList.toggle("dark");
//    if (theme === "dark") {
//      window.localStorage.setItem("theme", "light");
//    } else window.localStorage.setItem("theme", "dark");
// });

// refresh.addEventListener("click", () => {
//    window.location.reload();
// });

