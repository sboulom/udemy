const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("HELLO server is up")
})







app.listen(3000, function(){
    console.log("Server is running on PORT 3000!")
})