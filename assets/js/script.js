// wait for the DOM to finish loading before running the game
//get the button elements and add event listners to them

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

   // for (i=0; i<buttons.length; i)++
    for (let button of buttons){
        button.addEventListener('click', function(){
            // inside the code block "this" refers to the button that was just clicked, can be addition button, minus button etc.
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById('answer-box').addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            checkAnswer();
        }
    })

    runGame('addition');

})
// a docstring is used to describe function. should go right above where the function name is declared, hovering over where the function is called will provide the doc string description
/** 
 * The main game "loop, called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){

    document.getElementById('answer-box').value = " ";
    document.getElementById('answer-box').focus();

    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2);
    }else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    }else if(gameType === 'subtract'){
        displaySubtractQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        // throw statement to stop game from running
        throw `unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in
 * the returned calculatedCorrectAnswer array
 */
function checkAnswer(){

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("Hey, You got it right! :)");
        incrementScore();
    } else{
        alert(`You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

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
    } else if(operator === 'x'){
        return [operand1 * operand2, 'multiply'];
    }else if(operator ==='-'){
        return [operand1 - operand2, 'subtract'];
    } else{
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting`
    }

}

/**
 * gets the current score from the DOM and increments it by 1
 */
function incrementScore(){

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2){
    // Ternary operator instead of if statements
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}