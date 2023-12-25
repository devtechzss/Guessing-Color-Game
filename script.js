var targetBox = document.getElementById('target-color-box');
var  guessBox = document.getElementById("guess-color-box");

//button variables 
var resetButton = document.getElementById('reset');
var  newColor = document.getElementById('newColor');
var guessColor = document.getElementById('check');

//progress variables
var  redProgress = document.getElementById('red')
var  greenProgress = document.getElementById('green')
var blueProgress = document.getElementById('blue')

//Guesses colorss
var guessRed =0;
var guessGreen =0;
var guessBlue =0;

//guess status variable
var guessStatus='';
var isWin =false;
// When set the random color in the target box 
document.addEventListener('DOMContentLoaded',()=>{
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    targetBox.style = `background-color: rgb(${red}, ${green}, ${blue});`

})

//reset button is ready
resetButton.addEventListener("click", () => guessBox.style = '  background-color: rgb(0, 0, 0);');

//geting a new color  
newColor.addEventListener('click', () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    targetBox.style = `background-color: rgb(${red}, ${green}, ${blue});`
  
})

//progress red input handler 
redProgress.addEventListener('input',  ()=> {
    guessRed = redProgress.value;
    guessBox.style = `background-color: rgb(${guessRed}, ${guessGreen}, ${guessBlue});`

})

//progress green input handler 
greenProgress.addEventListener('input', () =>{
    guessGreen = greenProgress.value;
    guessBox.style = `background-color: rgb(${guessRed}, ${guessGreen}, ${guessBlue});`
})

//progress red input handler 
blueProgress.addEventListener('input',  () =>{
    guessBlue = blueProgress.value;
    guessBox.style = `background-color: rgb(${guessRed}, ${guessGreen}, ${guessBlue});`
})



