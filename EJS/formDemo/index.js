const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const {people} = require('./helpers/fakeData');

app.get('/', (req, res)=> {
    res.render("form.ejs");
});

app.get('/getdata', (req, res)=> {
    //need to push input values to array
    //need to reference values using ->
    let tempPerson = {
        fname: req.query.fname,
        lname: req.query.lname,
        age: req.query.age,
        isAlive: req.query.isAlive === "alive" ? true : false,
    };


    //this is the destructured version
    //let {fname, lname, age, isALive} = req.query
    // let tempPerson = {
        // fname,
        // lname,
        // age,
        // isAlive,
    // };

    //this next line will push the values to the array
    people.push(tempPerson);
    res.render('results.ejs', {data : people});
    // console.log(req.query.fname);
});

app.get('/results', (req, res)=> {
    res.render('results.ejs', {data : people});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));