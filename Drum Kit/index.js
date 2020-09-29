var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var j = 0; j < numberOfDrumButtons; j++) {
    
    document.querySelectorAll("button")[j].addEventListener("click", function (){

        this.style.color = "white";
    });
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