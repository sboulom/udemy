var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


$(".btn").click(function(){
    //used to store the id that the user clicks
    var userChosenColor = $(this).attr("id");
    
    //whatever user selected from user chosen color, you'll push to the user clicked pattern
    userClickedPattern.push(userChosenColor)


})


function nextSequence(){

    var randomNumber = Math.floor(Math.random() *4);
    var randomChosenColor = buttonColor[randomNumber];


    //adding random chosen color to end of array.
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);


    //js way of playing sound. folder + variable to select file name + mp3 
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");

    audio.play();

}