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

function runGame(){

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