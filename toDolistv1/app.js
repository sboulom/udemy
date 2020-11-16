// const { response } = require("express");
const express = require("express");
const https = require("https");

//package allow to look at post request and fetch data based on name of input. ex. cityName
const bodyParser = require("body-parser");


const app = express();

app.get("/", function(req, res){

    var today = new Date();


    res.send("hello")
})


app.listen(3000, function(){
    console.log("Server is running on PORT 3000!")
});