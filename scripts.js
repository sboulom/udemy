function lifeInWeeks(age){
    
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + 
    " months left!")

}

lifeInWeeks(12);

function getMilk (money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var numberOfBottles = Math.floor(money /1.5);

    console.log("buy " + numberOfBottles + " bottles of milk! ")

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");¡™
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5;
}

function calcBottle(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startngMoney / costPerBottle);

    return numberOfBottles;
}

var change = getMilk(4);
console.log(change);

function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello, here is your " + getMilk(5) + " change.")