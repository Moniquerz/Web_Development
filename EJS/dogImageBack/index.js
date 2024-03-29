const express = require("express");
const app = express();
const request = require('request');

const logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('public'));


app.get('/', (req, res)=>{
    // res.send("Server response");
    res.redirect('/home');
});


let initialImage = "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg"

app.get('/home', (req, res)=>{
    res.render('home.ejs', {image: initialImage, error: ""});
});


let baseUrl = "https://dog.ceo/api";

app.get('/getdogimage', (req,res)=> {
    let route= 'breeds/image/random'
    let endpoint = `${baseUrl}/${route}`;
    request(endpoint,(error, response, body)=> {
       if(!error && response.statusCode === 200){
        let parsedData = JSON.parse(body);
        res.render('home.ejs', {image: parsedData.message, error: ''});
        } else {
            console.error("there is an error", response.statusCode);
            res.render('home.ejs', {
                image: `https://http.cat/${response.statusCode}`,
                error: "Opps something went wrong",
            });
        } 
    });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));