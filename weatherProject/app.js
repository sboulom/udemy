// const { response } = require("express");
const express = require("express");
const https = require("https");

//package allow to look at post request and fetch data based on name of input. ex. cityName
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/", function(req,res){
  
    //receiving data from input post request
   
    const query = req.body.cityName;
    const apiKey = "7980901759d3b1066013adeb63af74a7";
    const unit = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function(response){
    // console.log(response.statusCode); 

    response.on("data", function(data){
    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    res.write("<p>The weather currently is " + weatherDescription + "</p>"); 
    res.write("<h1>The temperature in " + query + " is " + temp + 
    " degrees</h1>");
    res.write("<img src =" + imageURL + ">");
    res.send();
});
});
})



app.listen(3000, function(){
    console.log("Server is running on PORT 3000!")
});


