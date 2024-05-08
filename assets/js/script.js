// wait for the DOM to finish loading before running the game
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
                runGame(gameType);
            }
        })
    }

    runGame('addition');

})
// a docstring is used to describe function. should go right above where the function name is declared, hovering over where the function is called will provide the doc string description
/** 
 * The main game "loop, called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2);
    } else{
        alert(`unknown game type: ${gameType}`);
        // throw statement to stop game from running
        throw `unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer(){

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM and returns the correct answer
 */
function calculateCorrectAnswer(){
    // parseInt will tyreat value as a integer whole number rather than a string
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else{
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting`
    }

}
function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
    
}