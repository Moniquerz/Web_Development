//requiring dotenv so you can access the api key
require('dotenv').config();

//accessing the api key
const {API_KEY} = process.env

const express = require("express");
const app = express();
const request = require('request');
const logger = require('morgan');

if(process.env.NODE_ENV !== 'production'){
    app.use(logger('dev'));
}

// const { response } = require('express');

//accessing assets folder for css
app.use(express.static('assets'));

//setting view engine so we dont have to specify that its an ejs file
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    //redirecting root to home page
    res.redirect('/home');
});

let baseUrl = "https://api.giphy.com/v1"

app.get('/home', (req, res)=>{
    let route = `gifs/trending?api_key=${API_KEY}&limit=25&rating=g`
    let endpoint = `${baseUrl}/${route}`
    request(endpoint,(error, response, body)=> {
        //parsing the data 
        let giphy = JSON.parse(body)
        //console logging data
        // console.log(giphy.data) 
        //rendering the home page
        res.render('home', {giphy: giphy.data});
    })
});

app.get('/results', (req, res) => {
    let searchedText = req.query.search;
    let route = `${baseUrl}/gifs/search?api_key=${API_KEY}&limit=25&q=${searchedText}`

    request(route, (err, response, body)=>{
        let data = JSON.parse(body);
        res.render('results', {data: data.data})
    })
    
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));