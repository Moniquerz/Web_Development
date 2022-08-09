require("dotenv").config();
const express = require("express");
const app = express();

//tells app to use public folder
app.use(express.static('public'));

//allows us to parse our body if its json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//import connection , the parenthesis at the end is envoking the function
//will connect us to the db 
require('./services/mongoConnection')();

app.get('/', (req, res) => res.render('home.ejs'));

const deleteRoute = require('./routes/deleteRoute');
const createRoutes = require('./routes/createRoute');
const updateRoutes = require('./routes/updateRoute');
const readRoutes = require('./routes/readRoute');
const homeRoutes = require('./routes/homeRoute');


//this says if you go to the delete route, use deleteRoute
app.use('/delete', deleteRoute);
//if you go to /create route, use the code in createRoutes
app.use('/create', createRoutes);

app.use('/update', updateRoutes);

app.use('/read', readRoutes);

app.use('/home', homeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Book app on port ${PORT}`));