const express = require("express");
const app = express();

//tell our app to use our logger
const logger = require('morgan');
app.use(logger('dev'));


//set our view engine, so we dont have to type ejs after the file name
app.set("view engine", "ejs");

//tell the app to use the static files in express
app.use(express.static("public"));

const {zoo} = require('./fakeData');


app.get('/', (req, res)=>{
    res.redirect('/home');
});

app.get('/home', (req,res)=> {
    res.render('home', {doggyHorse: zoo});
});

app.get('/about', (req,res)=> {
    res.render('about', {data: zoo});
});

app.get('/contact', (req,res)=> {
    res.render('contact', {data: zoo});
});

app.get('/petfriendly', (req,res)=> {
    res.render('petfriendly', {data: zoo});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));