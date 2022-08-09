const express = require('express');
const app = express();
const Quote = require('inspirational-quotes');


app.get('/', (req, res) => {
    res.redirect("/getQuote");
});

app.get('/info', (req,res)=> {
    res.send("here is where you would find info");
});

//when /getQuote is called,
//send back one random quote
app.get('/getQuote', (req, res) => {
    res.send(Quote.getRandomQuote());
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App on port ${PORT}`));