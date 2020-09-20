
//Life in Weeks Challenge
// function lifeInWeeks(age){
    
//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;

//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + 
//     " months left!")

// }

// lifeInWeeks(12);



//Milk challenge
// function getMilk (money) {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");

//     var numberOfBottles = Math.floor(money /1.5);

//     console.log("buy " + numberOfBottles + " bottles of milk! ")

//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");    
//     console.log("enterHouse");

//     return money % 1.5;
// }

// function calcBottle(startingMoney, costPerBottle){
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle);

//     return numberOfBottles;
// }

// var change = getMilk(4);

// function calcChange(startingAmount, costPerBottle){
//     var change = startingAmount % costPerBottle;
//     return change;
// }

// console.log("Hello, here is your " + getMilk(5) + " change.")

//Bmi Calculator

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight, height){
//  var bmi = weight / Math.pow(height, 2);
//  return Math.round(bmi);
// }



// var bmi = bmiCalculator(65, 1.8); 
// console.log(bmi)

//Psuedo Random Number Generator//

// var n = Math.random();
// n = Math.floor(n *6) + 1;
// console.log(n);

//Love Calculator
// prompt("What is your name?");
// prompt("What is the name of your love?");

// var loveCal = Math.random();
// loveCal = Math.floor(loveCal * 100) +1;

// if(loveCal > 70){
//     alert("Your love score is " + loveCal + "%!" + " Get a Room!")
// } 
// if (loveCal > 30 && loveCal <= 70){
//     alert("Your love score is " + loveCal + "%!" + " Get a Room!")
// }

// else{
//     alert("Your love score is " + loveCal + "%!" + " You are not in love")

// }

//leap year
// function isLeap(year){
   
//     if(year % 4 === 0 ){
//         if(year % 100 === 0){
//             if(year % 400 === 0){
//                 return "Leap year."
//             } else{
//             return "Not leap year.";
//             }
//         } else {
//             return "Leap year."
//         }
//     } else {
//         return "Not leap year."
//     }
  

// }

//check guest list

// var guestList =["Angela", "Jack" , "Pam" , "James", "Lara", "Jason"];

// var guestName = prompt("What is your name?");

// if(guestList.includes(guestName)){
//     alert("Welcome to the party!");
// } else {
//     alert("Hit the road jack!")
// }

//Fizz buzz

// var output = [];
// var count = 1; //created var to keep track of count

// function fizzBuzz(){
//     while(count <= 100){
//     if(count % 3 === 0 && count % 5 === 0){
//         output.push("FizzBuzz");
//     }
//     else if(count % 3 === 0){
//         output.push("Fizz");
//     } 
//     else if(count % 5 === 0){
//         output.push("Buzz");
//     }
//     else {
//         output.push(count);
//     }
//     count++; //increment
//     console.log(output);
// }
// }
// fizzBuzz();

//Random Diners

// function whosPaying(names){
//     var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
//     var numberOfPeople = names.length;
//     var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//     var randomPerson = names[randomPersonPosition];

//     return randomPerson + " is going to buy lunch today!";
// }   


//bottles of beer

// var numberOfBottles = 99;

// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer");
//     console.log(numberOfBottles + " " + bottleWord + " of beer");
//     console.log("Take one down, pass it around,"); numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.")
// }

//