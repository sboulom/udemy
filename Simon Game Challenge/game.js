
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];


function nextSequence(){
    console.log(randomNumber);
    
    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
}

nextSequence();