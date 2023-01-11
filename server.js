//Import the express
const express = require("express");
//Create express app 
const app = express();

//Set up express to serve static files from the directory called 'public'
app.use(express.static("public"));

//Status codes defined in external file
require('./http_status.js');

//response with lessons data
app.get('/lessons', (req, res) => {
    const lessons = [
        { topic: 'math', location: 'hendon', price: 100 },
        { topic: 'math', location: 'colindale', price: 80 },
        { topic: 'math', location: 'brent cross', price: 90 },
        { topic: 'math', location: 'golders green', price: 120 },
    ];
    res.json(lessons);
});
//response with user data
app.get('/user', (req, res) => {
    const user = {
        email: 'user@email.com',
        password: 'mypassword',
    };
    //change the user to json
    res.json(user);
});

async function lessons(request, response) {

    response.json(data);

};



//Start the app listening on port 8080
app.listen(8080);
console.log("Listening on port 8080");
