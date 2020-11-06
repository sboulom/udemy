//variables for colors
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

//need a way to check if game is started by kep press. 
var started = false;

//using jQuery to detect keypress
$(document).keypress(function(){
    //once key press, it will display starting level. 
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

});

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor);

    //console logs the pattern clicked by user.


    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000)
        }
    } else {
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");

        }, 200);

        $("level-title").text("Game Over, Press Any Kee to Restart");
        startOver();
    }

};

function nextSequence(){

    userClickedPattern = [];
    //to increase level inside function
    //to increase level inside function
    level++;

    $("#level-title").text("Level " + level);
    // console.log(randomNumber);
    //generate numbers 1-4
    var randomNumber = Math.floor(Math.random() * 4);
    //uses line 2 array and selects random number assinged in array
    var randomChosenColor = buttonColors[randomNumber];
    //grabs game pattern array and pushes random chosen color---which is colors arrray + generated number
    gamePattern.push(randomChosenColor);


    //using jQuery to select button with randomChosen color var then flashing it with fade in and out.
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
};    


//function for sound and user chosen color
function playSound(name){
    
   //variable to create audio sound with random chosen color + file path.
   var audio = new Audio ("sounds/" + name + ".mp3");

   audio.play();


};

function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
        
    }, 100);
};
//Inside this function, you'll need to reset the values of level, gamePattern and started variables.
function startOver(){

    level = 0;
    gamePattern = [];
    started = false;
    
};


