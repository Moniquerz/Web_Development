const express = require("express");
const app = express();
const request = require('request');
const logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    // res.send("Server response");
    res.redirect('/home');
});


app.get('/home', (req, res)=>{
    res.render('home',{price: []});
});

let baseUrl = "https://api.coindesk.com/v1/bpi"

app.get('/price' , (req,res) => {
    let route =`currentprice.json`
    let endpoint = `${baseUrl}/${route}`
    request(endpoint,(error, response, body)=>{
        let data = JSON.parse(body)
        console.log(data)
        res.render('home',{price : data.bpi.USD.rate_float.toFixed(2)});
    });
  
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));