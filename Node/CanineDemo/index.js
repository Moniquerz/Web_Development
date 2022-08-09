const express = require('express');
const app = express();
const canine = require('canis-familiaris');

//displays a random dog breed
app.get('/', (req,res)=> {
    res.send(canine.random());
});

//displays 5 random dog breeds
app.get('/breeds', (req,res)=> {
    res.send(canine.random(5));
});

//will add a random dog breed to an array 
let dogArr = [];
app.get('/data', (req,res)=> {
    dogArr.push(canine.random());
    res.send("Random dog breed added to data array");
});

//will show the array we created
app.get('/showData', (req,res)=> {
    res.send(dogArr);
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App on port ${PORT}`));