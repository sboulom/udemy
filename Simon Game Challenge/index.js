var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
//user sequence
var userClickedPattern = [];

var level = 0;


$(document).keypress(function(){
   
    if (!started){

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    //used to store the id that the user clicks
    var userChosenColor = $(this).attr("id");
    
    //whatever user selected from user chosen color, you'll push to the user clicked pattern
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){


            setTimeout(function () {

                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
    }

};

function nextSequence(){

    level ++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() *4);
    var randomChosenColor = buttonColor[randomNumber];
    //adding random chosen color to end of array.
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    animatePress(userChosenColor);

};

function playSound(name){
    //js way of playing sound. folder + variable to selectfile name + mp3 
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");

    audio.play();

};

function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};