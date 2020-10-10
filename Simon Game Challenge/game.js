//variables for colors
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];


function nextSequence(){
    console.log(randomNumber);
    //generate numbers 1-4
    var randomNumber = Math.floor(Math.random() * 4);
    //uses line 2 array and selects random number assinged in array
    var randomChosenColor = buttonColors[randomNumber];
    //grabs game pattern array and pushes random chosen color---which is colors arrray + generated number
    gamePattern.push(randomChosenColor);
}

nextSequence();