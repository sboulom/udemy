const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//code to use body
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){

    console.log(req.body);

    res.send("Thanks for posting");
});

app.listen(3000, function(req, res){
    console.log("Server Started on PORT 3000!");
});

