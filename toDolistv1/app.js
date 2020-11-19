// const { response } = require("express");
const express = require("express");
const https = require("https");

//package allow to look at post request and fetch data based on name of input. ex. cityName
const bodyParser = require("body-parser");


const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options);

    // var currentDay = today.getDay();
    // var day = "";

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to current day");
                             
    // }
    // if(currentDay === 6 || currentDay === 0){
    //     day = "WEEKEND!!!";
    // } else {
    //     day = "Weekday!"

    // }


    res.render("lists", {kindOfDay: day})
})


app.listen(3000, function(){
    console.log("Server is running on PORT 3000!")
});