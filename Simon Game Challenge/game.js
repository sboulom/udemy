//variables for colors
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];


$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");
    //
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern)

    
})



function nextSequence(){
    console.log(randomNumber);
    //generate numbers 1-4
    var randomNumber = Math.floor(Math.random() * 4);
    //uses line 2 array and selects random number assinged in array
    var randomChosenColor = buttonColors[randomNumber];
    //grabs game pattern array and pushes random chosen color---which is colors arrray + generated number
    gamePattern.push(randomChosenColor);


    //using jQuery to select button with randomChosen color var then flashing it with fade in and out.
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    

    //variable to create audio sound with random chosen color + file path.
    var audio = new Audio ("sounds/" + randomChosenColor + ".mp3");

    audio.play();




}    

