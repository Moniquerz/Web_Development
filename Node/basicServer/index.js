//this says i'm going to use express
const express = require("express");
//this next line envokes this express function. i want access to everything express has to offer 
const app = express();


//route handlers
app.get('/', (req, res)=>{
    res.send("My first server response")
});

//the listener
// listening for enviornment port OR port 3000
//console.log is just so we can visually see that it is running
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));