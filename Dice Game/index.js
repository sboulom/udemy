var randomNumber1 = Math.floor(Math.random() *6) +1; //+1 so you can round up to number 6

// var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/dice" + randomNumber1 + ".png"; // will become images/dice 1-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);