//make sure you have a .env file with your env variable. this is how you require it 
require('dotenv').config();

//this next line is called destructuing, taking the key in the object and pulling that one out. just makes things easier. instead of typing process.env.API_KEY
const {API_KEY} = process.env
console.log(API_KEY);
const express = require("express");
const app = express();
const request = require('request');

const logger = require('morgan');
const { response } = require('express');
app.use(logger('dev'));
app.use(express.static('public'));

//this is setting our view engine so we dont have to specify that its an ejs file. it will automatically know
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
    // res.send("Server response");
    res.redirect('/home');
});

app.get('/home', (req, res)=>{
    res.render('home', {data: []});
});


let baseUrl = "https://api.themoviedb.org/3"

app.get('/upcoming' , (req,res) => {
    let route =`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    let endpoint = `${baseUrl}/${route}`
    request(endpoint,(error, response, body)=>{
        let data = JSON.parse(body)
        console.log(data.results)
        res.render('home', {data : data.results});
    });
    
});

app.get('/search', (req, res) => {
    let route = `search/movie?api_key=${API_KEY}&language=en-US&query=${req.query.movieSearch}&page=1&include_adult=false`
    let endpoint = `${baseUrl}/${route}`
    request(endpoint, (error, response, body)=> {
        let data = JSON.parse(body);
        res.render('home', {data: data.results})
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));