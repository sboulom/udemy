var randomNumber1 = Math.floor(Math.random() *6) +1; //+1 so you can round up to number 6

// var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/dice" + randomNumber1 + ".png"; // will become images/dice 1-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
} 
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
}
else {
    document.querySelector("h1").innerHTML = "DRAW!!! TRY AGAIN";
}


// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
//   }
//   else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   }
//   else {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }
  






//code for the 3rd and 4th image. remember to uncomment in HTML file if you uncomment this 
// var randomNumber3 = Math.floor(Math.random() * 6) +1;

// var randomImageSource3 = "images/dice" + randomNumber3 + ".png";

// document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);


// var randomNumber4 = Math.floor(Math.random() * 6) +1;

// var randomImageSource4 = "images/dice" + randomNumber4 + ".png";

// document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);
