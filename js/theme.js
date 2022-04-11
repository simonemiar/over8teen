

// Change theme to dark by adding the `dark` classname to html element.
let theme = localStorage.getItem('data-theme');

const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
    localStorage.setItem("data-theme", "dark"); // save theme to local storage
}

// Reset the html class to default
const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light"); // set theme light
    localStorage.setItem("data-theme", 'light'); // save theme to local storage
}

// Get the element based on ID
const checkbox = document.getElementById("switch");
//checkbox.checked = localStorage.getItem('data-theme') === "dark" ? false:true;
if(!localStorage.getItem('data-theme')){
    checkbox.checked=true;
} else if (localStorage.getItem('data-theme') === "dark"){
    checkbox.checked=false;
} else {
    checkbox.checked=true;
}
// Apply retrived them to the website
checkbox.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});
// Remembers last theme 
document.documentElement.setAttribute("data-theme", theme);