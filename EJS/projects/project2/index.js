const express = require('express');
const app = express();

let messages = [
    {name: "Jim", message: "Hi, how are you?"},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Gary", message: "I like my pasta with butter"}
]

app.get('/', (req, res)=>{
    res.redirect('/messages');
});

app.get('/messages', (req, res)=> {
    res.render("messages.ejs", {message : messages});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));