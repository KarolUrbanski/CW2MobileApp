//Import the express, body-parser and express-session modules
const express = require("express");
//Create express app and configure it with body-parser
const app = express();

//Set up express to serve static files from the directory called 'public'
app.use(express.static("public"));


app.get("/lessons", lessons); //

async function lessons(request, response) {

    response.json(data);

    };



//Start the app listening on port 8080
app.listen(8080);
console.log("Listening on port 8080");
