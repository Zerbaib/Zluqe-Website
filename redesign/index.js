const isScrolling = () => {
  const headerEl = document.querySelector('.primary-header')
  const navItems = document.querySelector('.nitem')
  let windowPosition = window.scrollY > 780
  headerEl.classList.toggle('active', windowPosition)
  navItems.classList.toggle('active', windowPosition)
  
}
window.addEventListener('scroll', isScrolling)
let btntotop = document.getElementById("btn-back-to-top");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
  document.body.scrollTop > 50 ||
  document.documentElement.scrollTop > 50
) {
  btntotop.style.display = "block";
} else {
  btntotop.style.display = "none";
}
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }

// When the user clicks on the button, scroll to the top of the document
btntotop.addEventListener("click", backToTop);



function googleTranslateElementInit() {  
new google.translate.TranslateElement(  
    {pageLanguage: 'en'},  
    'google_translate_element'  
);  
} 

//--------------------------
// Agentseed's theme changer
//--------------------------
var theme = localStorage.getItem("theme");
var stylesheet = document.getElementsByTagName('link')[0]; // gets the first link element (should be the site stylesheet)
if (theme != 'dark' && theme != 'light') {
  localStorage.setItem("theme", "dark");
  theme = localStorage.getItem("theme");
} else {
  theme = localStorage.getItem("theme");
}
if(theme == 'dark') {
  setThemeDark();
} else if (theme == 'light'){
  setThemeLight();
}
function changeTheme() {
  if (theme == 'dark') {
      setThemeLight();
  } else if (theme == 'light') {
      setThemeDark();
  }
}
function setThemeDark() {
stylesheet.setAttribute('href', "dark.css")
  localStorage.setItem("theme", "dark"); // sets the localstorage element "theme" to dark
  theme = 'dark'; // sets theme to dark
}
function setThemeLight() {
  stylesheet.setAttribute('href', "light.css")
  localStorage.setItem("theme", "light") // sets the localstorage element "theme" to light
  theme = 'light'; // sets theme to light
}
