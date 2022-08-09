const express = require('express')
const app = express()
const request = require('request')
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    let types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
   
    res.render('home.ejs', { type: types })
})

app.get('/Activity', (req, res) => {
    const { type, price, participants } = req.query

    const urlStr = `http://www.boredapi.com/api/activity?type=${type}&minprice=0&maxprice=${price}&participants=${participants}`


    request(urlStr, (error, response, body) => {
        let data = JSON.parse(body);

        if(data.error){
           res.render('error.ejs', { error: data.error})
        }
        else {
            res.render("result.ejs", { data });
        }
    })
})

app.listen(port, () => 
    console.log('App listening on port 3000')
)