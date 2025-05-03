// To create the toggle effect we must first write a variable declaration for our document body and for the switch buttom which ww would then add an event listener to so that on click it performs the function we want it to run

//add variable declaration for the button and body
let themeButton = document.getElementById('theme-switch');
let body = document.body;

//Add a click event listener to the button
themeButton.addEventListener('click', () => 
{
//lastly, we tell it what we want it to do by adding a class to the body element
body.classList.toggle('dark');
});