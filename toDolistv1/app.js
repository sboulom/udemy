// const { response } = require("express");
const express = require("express");
const https = require("https");

//package allow to look at post request and fetch data based on name of input. ex. cityName
const bodyParser = require("body-parser");


const app = express();

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    if(currentDay === 6 || currentDay === 0){
        res.send("IT'S MY FRIDAY!!!");
    } else {
        res.send("Almost the weekend...")

    }
})


app.listen(3000, function(){
    console.log("Server is running on PORT 3000!")
});