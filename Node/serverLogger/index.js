//foundation
const express = require('express');
const app = express();
//install morgan and chalk
// const chalk = require('chalk');
const logger = require('morgan');
app.use(logger('dev'));



//route handlers
app.get('/', (req, res) => {
    res.send("hello!!!");
});


app.get('/dog', (req,res)=>{
    let dog = {
        name: "Annie"
    }
    res.send(dog);
});


app.get('/dog/cat', (req, res)=> {
    res.send("this is the dog/cat route");
});


app.get('/numbers', (req, res)=>{
    //this will send a random number from 1-100
    let num = Math.floor(Math.random()* 100) + 1
    //"" +  num   will make the num into a string 
    res.send("" + num)
});

//this will be used if the route does not exist 
app.get('*', (req, res) => {
    res.send("Sorry, route does not exist");
});




//listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App on port ${PORT}`))