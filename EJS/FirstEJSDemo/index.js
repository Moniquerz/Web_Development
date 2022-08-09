const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.render("index.ejs");
});

app.get('/about', (req, res)=> {
    res.render("about.ejs");
});

app.get('/horse', (req, res)=> {
    res.render("horse.ejs");
});


let dog = ["mutt", "terrier"];
let cat = {speak: "meow!", legs: 4}
app.get('/dog', (req, res)=> {
    res.render("dog.ejs", {cat: cat, dog: dog});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));