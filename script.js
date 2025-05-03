// To create the toggle effect we must first write a variable declaration for our document body and for the switch buttom which we would then add an event listener to so that on click it performs the function we want it to run

//add variable declaration for the button and body
let themeButton = document.getElementById('theme-switch');
let body = document.body;

//Add a click event listener to the button
themeButton.addEventListener('click', () => 
{
//lastly, we tell it what we want it to do to the body when the button is clicked
body.classList.toggle('dark');
});

//Get the medium button and add an event listener to it

let myarticle = document.getElementById('link');

//add event listener to the variable myarticle

myarticle.addEventListener('click', () =>
{
    //when clicked, take user to this article and open in a new tab
    location.href = 'https://medium.com/@cphanie.as/theme-switch-css-vs-dom-3567c42a7763'; //+ 'target="_blank"';
});