const { response } = require("express");
const express = require("express");
const https = require("https");



const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=paris&units=imperial&appid=7980901759d3b1066013adeb63af74a7"

    https.get(url, function(response){
        console.log(response.statusCode); 

        response.on("data", function(data){
        const weatherData = JSON.parse(data);
        const object = {
            name: "Steven",
            favoriteFood: "Pizza",
        }
        console.log(JSON.stringify(object));
        console.log(weatherData); 

    });
    });

    res.send("HELLO server is up");
});







app.listen(3000, function(){
    console.log("Server is running on PORT 3000!")
})