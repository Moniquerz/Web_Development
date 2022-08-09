//I was able to build this without looking on my 5th attempt!

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send("this is my server response");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));