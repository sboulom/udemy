// const { response } = require("express");
const express = require("express");
const https = require("https");

//package allow to look at post request and fetch data based on name of input. ex. cityName
const bodyParser = require("body-parser");


const app = express();

var items = [];

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options);


    res.render("lists", {kindOfDay: day, newListItems: items})
})

app.post("/", function(req, res){
   var item = req.body.newItem;

   items.push(item);

   res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server is running on PORT 3000!")
});