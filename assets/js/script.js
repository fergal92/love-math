// wait fpor the DOM to finish loading before running the game
//get the button elements and add event listners to them

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

   // for (i=0; i<buttons.length; i)++
    for (let button of buttons){
        button.addEventListener('click', function(){
            // inside the code block "this" refers to the button that was just clicked, can be addition button, minus button etc.
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else{
                let gameType = this.getAttribute("data-type");
                // tell the user what button had been clicked
                alert(`You clicked ${gameType}!`);
            }
        })
    }
})
// a docstring is used to describe function. should go right above where the function name is declared, hovering over where the function is called will provide the doc string description
/** 
 * The main game "loop, called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}
function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
    
}