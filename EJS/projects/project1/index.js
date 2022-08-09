const express = require('express');
const app = express();

let pizza = "I like my pizza with extra pineapple"
let cappuccino = "I like my cappuccino to be sweet."
let fries = "I like my fries crispy with extra salt."


//in order to send  variables to other pages, we have to send them in a JavaScript object as an argument in the render method 
app.get('/', (req, res)=> {
    res.render("home.ejs", {message : pizza});
});

app.get('/about', (req, res)=> {
    res.render("about.ejs", {message : cappuccino});
});

app.get('/contact', (req, res)=> {
    res.render("contact.ejs", {message : fries});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));