var numberOfDrumButtons = document.querySelectorAll(".drum").length;
    //event listener for mouse press
for (var i = 0; i < numberOfDrumButtons; i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        // console.log(this); logs mouse press

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    })
    
}
    // event listener for key down press
document.addEventListener("keydown", function(event){
  
    makeSound(event.key)
    // console.log(event.key); logs key pressed
    buttonAnimation(event.key);
})

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var crash = new Audio("sounds/snare.mp3");
            crash.play();
        break;

        case "k":
            var snare = new Audio("sounds/crash.mp3");
            snare.play();
        break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default:
            break;
}}


//function with set timeout to remove animation and added class.
function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 1500);

}

 



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

//calculator
// function add(num1, num2){
//     return num1 + num2;
// }
 
// function multiply(num1, num2){
//     return num1 * num2;
// }

// function divide(num1, num2){
//     return num1 / num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }
// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }

//create js object
// var bellBoy1 = {
//     name: "Timmy",
//     age: 19,
//     hasWorkPerit: true,
//     languages: ["French, English"],
// }

// var houseKeeper1 = {
//     name: "Jasmine",
//     yearExperience: 5,
//     hasWorkPerit: true,
//     languages: ["English, Turkish"],
// }

// function HouseKeeper(name, yearExperience, hasWorkPerit, languages){
//     this.name = name;
//     this.yearExperience = yearExperience;
//     this.hasWorkPerit = hasWorkPerit;
//     this.languages = languages;
//     this.clean = function (){
//         alert("Cleaning in progress");
//     }
// } 

// var houseKeeper1 = new HouseKeeper("Jane", 12, true, ["Mandarin", "English", "Spanish"]);