const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//dark or light images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//toggle light & dark mode
function isLightDarkMode(isDark) {
    nav.style.background = isDark
        ? "rgb(0 0 0 / 50%)"
        : "rgb(255 255 255 / 50%)";
    textBox.style.background = isDark
        ? "rgb(255 255 255 / 50%)"
        : "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
    isDark
        ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
        : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    isDark ? imageMode("dark") : imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        isLightDarkMode(true);
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        isLightDarkMode(false);
    }
}
//Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme && currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
    isLightDarkMode(true);
}
