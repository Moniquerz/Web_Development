//this says i'm going to use express
const express = require("express");
//this next line envokes this express function. i want access to everything express has to offer 
const app = express();
const port = process.env.PORT || 3000;


//body parser, enables us to read the body
app.use(express.urlencoded());


//route handlers
app.get('/', (req, res)=>{
    res.send("My first express app");
    console.log('A get request was made');
});


//possible query keys are [title, data, id]
app.get('/r/:subreddit/comments', (req, res)=>{   
    console.log('The params are :', req.params);
    console.log('The query params are :', req.query);
    res.send(`Welcome to the ${req.params.subreddit} page!`);
});

//POST handler
app.post('/', (req, res) => {
    console.log('the request body is', req.body);
    res.end();
});


//this will be used if the route does not exist 
app.get('*', (req, res) => {
    res.send("Sorry, route does not exist");
});


//the listener
// listening for enviornment port OR port 3000
//console.log is just so we can visually see that it is running

app.listen(port, function () {
    console.log(`firstExampleApp listening on port ${port}`);
});